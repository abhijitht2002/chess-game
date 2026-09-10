import type { Position } from "./Position.js";

export class Board {
  constructor() {
    const Board: Position[] = [];

    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        Board.push({
          file: null,
          rank: null,
        });
      }
    }
  }
}
