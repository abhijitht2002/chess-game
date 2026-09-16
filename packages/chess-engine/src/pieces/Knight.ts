import { Piece } from "./Piece.js";
import type { Position } from "../board/Position.js";
import type { Vector2D } from "../types/Vector2D.js";
import { generateSteppingMoves } from "./utils.js";

export class Knight extends Piece {
  getMoveCandidates(): Position[] {
    const offsets: Vector2D[] = [
      [-2, -1],
      [-2, 1],
      [-1, -2],
      [-1, 2],
      [1, -2],
      [1, 2],
      [2, -1],
      [2, 1],
    ];

    return generateSteppingMoves(this.position, offsets);
  }
}
