import { board } from "../engine/state.js";

let selected = null;

export const handleClick = (row, col) => {
  console.log("clicked: ", row, col);

  const piece = board[row][col];
  console.log(piece);

  if (!selected) {
    selected = { row, col };
    return;
  }

  selected = null;
};
