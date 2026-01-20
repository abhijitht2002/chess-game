import { getLegalMoves } from "../engine/moveGen/legal.js";
import { board } from "../engine/state.js";

let selected = null;

export const handleClick = (row, col) => {
  console.log("clicked: ", row, col);

  const piece = board[row][col];
  console.log(piece);

  // if (!selected) {
  //   selected = { row, col };
  //   return;
  // }

  const legalMoves = getLegalMoves(board, row, col);
  console.log("legalMoves: ", legalMoves);

  // selected = null;
};
