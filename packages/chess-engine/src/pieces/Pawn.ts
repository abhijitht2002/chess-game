// Pawn.ts

import type { Position } from "../types/position.js";
import { Piece } from "./Piece.js";

export class Pawn extends Piece {
  // pawn-specific movement
  getMoves(): Position[] {
    return [];
  }
}
