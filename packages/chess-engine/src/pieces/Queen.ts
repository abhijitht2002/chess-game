import { Piece } from "./Piece.js";
import type { Position } from "../board/Position.js";
import type { Vector2D } from "../types/Vector2D.js";
import { generateSlidingMoves } from "./utils.js";

export class Queen extends Piece {
  getMoveCandidates(): Position[] {
    const directions: Vector2D[] = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];

    return generateSlidingMoves(this.position, directions);
  }
}
