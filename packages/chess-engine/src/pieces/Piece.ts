// Piece.ts

import type { Position } from "../types/position.ts";

export type Color = "white" | "black";

export abstract class Piece {
  constructor(
    public readonly color: Color,
    public position: Position,
  ) {}

  abstract getMoves(): Position[];
}
