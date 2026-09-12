import { Piece } from "./Piece.js";
import type { Position } from "../board/Position.js";
import type { Direction } from "../board/Direction.js";
import { isWithinBoard } from "../board/isWithinBoard.js";

export class Rook extends Piece {
  getMoveCandidates(): Position[] {
    const directions: Direction[] = [
      [0, -1],
      [0, 1],
      [1, 0],
      [-1, 0],
    ];

    const moves: Position[] = [];

    for (const [df, dr] of directions) {
      let file = this.position.file + df;
      let rank = this.position.rank + dr;

      while (isWithinBoard({ file, rank })) {
        moves.push({ file, rank });

        file += df;
        rank += dr;
      }
    }

    return moves;
  }
}
