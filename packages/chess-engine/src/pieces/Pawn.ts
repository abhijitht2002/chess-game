import { Piece } from "./Piece.js";
import type { Position } from "../board/Position.js";
import { isWithinBoard } from "../board/isWithinBoard.js";

export class Pawn extends Piece {
  getMoveCandidates(): Position[] {
    const direction = this.color === "white" ? -1 : 1;
    const moves: Position[] = [];

    // one square forward
    let target = {
      file: this.position.file,
      rank: this.position.rank + direction,
    };
    if (isWithinBoard(target)) moves.push(target);

    // Two squares from the starting rank
    const startRank = this.color === "white" ? 6 : 1;
    if (this.position.rank === startRank) {
      target = {
        file: this.position.file,
        rank: this.position.rank + 2 * direction,
      };
      if (isWithinBoard(target)) moves.push(target);
    }

    // Diagonal captures
    target = {
      file: this.position.file + 1,
      rank: this.position.rank + direction,
    };
    if (isWithinBoard(target)) moves.push(target);

    target = {
      file: this.position.file - 1,
      rank: this.position.rank + direction,
    };
    if (isWithinBoard(target)) moves.push(target);

    return moves;
  }
}
