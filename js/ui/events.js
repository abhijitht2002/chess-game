import { getLegalMoves } from "../engine/moveGen/legal.js";
import { board, clearUI, setHighlights, setSelected } from "../engine/state.js";
import { renderBoard } from "./render.js";

let selected = null;

export const handleClick = (row, col) => {
  console.log("clicked: ", row, col);

  const piece = board[row][col];
  console.log(piece);

  // if (!selected) {
  //   selected = { row, col };
  //   return;
  // }
  // selected = null;

  if (piece) {
    const legalMoves = getLegalMoves(board, row, col);
    console.log("legalMoves: ", legalMoves);

    setHighlights(legalMoves);
    setSelected(row, col);

    renderBoard(board, handleClick);
  } else {
    clearUI();
    renderBoard(board, handleClick);
  }
};
