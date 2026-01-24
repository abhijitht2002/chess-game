import { getLegalMoves } from "../engine/moveGen/legal.js";
import { clearUI, setHighlights, setSelected, state } from "../engine/state.js";
import { renderBoard } from "./render.js";

let selected = null;

export const handleClick = (row, col) => {
  console.log("clicked: ", row, col);

  const piece = state.board[row][col];
  console.log(piece);

  // if (!selected) {
  //   selected = { row, col };
  //   return;
  // }
  // selected = null;

  if (piece) {
    const legalMoves = getLegalMoves(state.board, row, col);
    console.log("legalMoves: ", legalMoves);

    setHighlights(legalMoves);
    setSelected(row, col);

    renderBoard(state.board, handleClick);
  } else {
    clearUI();
    renderBoard(state.board, handleClick);
  }
};
