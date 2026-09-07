// Pawn.ts

import type { Position } from "../board/Position.js";
import { Piece } from "./Piece.js";

export class Pawn extends Piece {
  // pawn-specific movement

  getMoves(): Position[] {
    const dir = this.color === "white" ? -1 : 1;

    let moves: Position[] = [];

    // advance
    moves.push({
      file: this.position.file,
      rank: this.position.rank + dir,
    });

    // double advance
    const startRow = this.color === "white" ? 6 : 1;
    if (this.position.file === startRow) {
      moves.push({
        file: this.position.file,
        rank: this.position.rank + 2 * dir,
      });
    }

    // capture
    moves.push({
      file: this.position.file + 1,
      rank: this.position.rank + dir,
    });

    moves.push({
      file: this.position.file - 1,
      rank: this.position.rank + dir,
    });

    return moves;
  }
}
