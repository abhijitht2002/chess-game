import { isInCheck } from "../engine/rules/isInCheck.js";
import { state } from "../engine/state.js";
import { findKing } from "../engine/utils/index.js";

const boardEl = document.getElementById("board");

export const renderBoard = (board, onSquareClick) => {
  boardEl.innerHTML = "";

  const checkInfo = {};
  for (const color of ["WHITE", "BLACK"]) {
    if (isInCheck(board, color)) {
      checkInfo[color] = findKing(board, color);
    }
  }

  const isBlackPerspective = state.player.color === "BLACK"

  const rowRange = isBlackPerspective ? [...Array(8).keys()].reverse() : [...Array(8).keys()]
  const colRange = isBlackPerspective ? [...Array(8).keys()].reverse() : [...Array(8).keys()]

  for (const row of rowRange) {
    for (const col of colRange) {
      // Square element for each position on the board
      const squareEl = document.createElement("div");
      squareEl.classList.add("square");

      const isDark = (row + col) % 2 === 1;
      squareEl.classList.add(isDark ? "dark" : "light");

      const piece = board[row][col];
      if (piece) {
        const img = document.createElement("img");
        img.src = `assets/${piece.color}_${piece.type}.png`;
        squareEl.appendChild(img);
      }

      if (state.highlights?.some(([r, c]) => r === row && c === col)) {
        squareEl.classList.add("highlight");
      }

      if (state.selected?.row === row && state.selected?.col === col) {
        squareEl.classList.add("selected");
      }

      // check highlight
      if (
        piece?.type === "KING" &&
        checkInfo[piece.color] &&
        checkInfo[piece.color][0] === row &&
        checkInfo[piece.color][1] === col
      ) {
        squareEl.classList.add("check");
      }

      squareEl.addEventListener("click", () => onSquareClick(row, col));
      boardEl.appendChild(squareEl);
    }
  }
};
