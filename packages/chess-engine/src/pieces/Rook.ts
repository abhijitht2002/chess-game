import type { Direction } from "../board/Direction.js";
import type { Position } from "../board/Position.js";
import { Piece } from "./Piece.js";

export class Rook extends Piece {
  getMoveCandidates(): Position[] {
    const directions: Direction[] = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    
    const moves: Position[] = [];

    return [];
  }
}
