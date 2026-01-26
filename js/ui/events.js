import { movePiece } from "../engine/board.js";
import { getLegalMoves } from "../engine/moveGen/legal.js";
import { clearUI, setHighlights, setSelected, state } from "../engine/state.js";
import { renderBoard } from "./render.js";

export const handleClick = (row, col) => {
  console.log("clicked: ", row, col);

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

    renderBoard(state.board, handleClick);
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

      renderBoard(state.board, handleClick);
      return;
    }

    // enemy or legal
    const isLegal = state.highlights.some(([r, c]) => r === row && c === col);

    if (isLegal) {
      movePiece(state.board, state.selected.row, state.selected.col, row, col);
      clearUI();
      switchTurn();
      state.phase = "select";
      renderBoard(state.board, handleClick);
      return;
    }

    //  invalid click
    clearUI();
    state.phase = "select";
    renderBoard(state.board, handleClick);
  }
};

export function switchTurn() {
  state.turn = state.turn === "WHITE" ? "BLACK" : "WHITE";
}
