import { Piece } from "./Piece.js";
import type { Position } from "../board/Position.js";
import type { Vector2D } from "../types/Vector2D.js";
import { generateSteppingMoves } from "./utils.js";

export class King extends Piece {
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

    return generateSteppingMoves(this.position, directions);
  }
}
