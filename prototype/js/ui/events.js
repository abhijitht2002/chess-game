import { movePiece } from "../engine/board.js";
import { getLegalMoves } from "../engine/moveGen/legal.js";
import { isCheckmate, isStalemate } from "../engine/rules/gameStatus.js";
import { clearUI, setHighlights, setSelected, state } from "../engine/state.js";
import { renderBoard } from "./render.js";
import { renderApp } from "./renderApp.js";

export const handleClick = (row, col) => {
  console.log("clicked: ", row, col);

  if (state.appPhase !== "playing") {
    return
  }

  const piece = state.board[row][col];
  console.log(piece);

  if (state.phase === "select") {
    console.log("seletion phase!!!");
    if (!piece || piece.color !== state.turn) {
      console.log(!piece ? "no piece selected" : "wrong turn");
      return;
    }

    const legalMoves = getLegalMoves(state.board, row, col);
    console.log("legalMoves: ", legalMoves);

    setSelected(row, col);
    console.log("selected:", state.selected);
    setHighlights(legalMoves);

    state.phase = "move";

    renderApp()
    return;
  }

  if (state.phase === "move") {
    console.log("move phase!!!");
    // Ally
    if (piece && piece.color === state.turn) {
      console.log("second selection");
      const legalMoves = getLegalMoves(state.board, row, col);
      console.log("legalMoves: ", legalMoves);

      setSelected(row, col);
      setHighlights(legalMoves);

      renderApp()
      return;
    }

    // enemy or legal
    const isLegal = state.highlights.some(([r, c]) => r === row && c === col);

    if (isLegal) {
      movePiece(state.board, state.selected.row, state.selected.col, row, col);
      clearUI();
      switchTurn();

      if (isCheckmate(state.board, state.turn)) {
        state.appPhase = "gameOver";
        state.status = "Checkmate"
        state.winner = state.turn === "WHITE" ? "Black" : "White"
      } else if (isStalemate(state.board, state.turn)) {
        state.appPhase = "gameOver";
        state.status = "Stalemate"
        state.winner = null
      }

      state.phase = "select";
      renderApp()
      return;
    }

    //  invalid click
    clearUI();
    state.phase = "select";
    renderApp()
  }
};

export function switchTurn() {
  state.turn = state.turn === "WHITE" ? "BLACK" : "WHITE";
}
