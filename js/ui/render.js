const boardEl = document.getElementById("board");

export const renderBoard = (board) => {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      // Square element for each position on the board
      const squareEl = document.createElement("div");
      squareEl.classList.add("square");

      const isDark = (row + col) % 2 === 1;
      squareEl.classList.add(isDark ? "dark" : "light");

      const piece = board[row][col];
      if (piece) {
        const img = document.createElement("img");
        img.src = `assets/${piece.color}_${piece.type}.png`;
        squareEl.appendChild(img)
      }

      boardEl.appendChild(squareEl)
    }
  }
};
