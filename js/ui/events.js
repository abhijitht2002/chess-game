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

    //  invalid click
    clearUI();
    state.phase = "select";
    renderBoard(state.board, handleClick);
  }
};
