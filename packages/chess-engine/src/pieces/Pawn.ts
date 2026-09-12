/**
 * Purpose:
 * Represents a Pawn piece in the chess game.
 * Defines its movement rules and generates its move candidates.
 *
 * Related:
 * - ./Piece.js
 * - ../board/Position.js
 */
import { Piece } from "./Piece.js";
import type { Position } from "../board/Position.js";

export class Pawn extends Piece {
  getMoveCandidates(): Position[] {
    const dir = this.color === "white" ? -1 : 1;

    const moves: Position[] = [];

    // one square forward
    moves.push({
      file: this.position.file,
      rank: this.position.rank + dir,
    });

    // Two squares from the starting rank
    const startRank = this.color === "white" ? 6 : 1;
    if (this.position.rank === startRank) {
      moves.push({
        file: this.position.file,
        rank: this.position.rank + 2 * dir,
      });
    }

    // Diagonal captures
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
