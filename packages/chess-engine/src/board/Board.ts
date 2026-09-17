import type { Position } from "./Position.js";
import type { Piece } from "../pieces/Piece.js";
import { isWithinBoard } from "./isWithinBoard.js";

export class Board {
  private grid: (Piece | null)[][] = [];

  constructor() {
    for (let r = 0; r < 8; r++) {
      this.grid[r] = [];
      for (let c = 0; c < 8; c++) {
        this.grid[r]![c] = null;
      }
    }
  }

  getPieceAt(pos: Position): Piece | null {
    if (!isWithinBoard(pos)) {
      return null;
    }
    return this.grid[pos.rank]?.[pos.file] ?? null;
  }

  setPieceAt(pos: Position, piece: Piece | null): void {
    if (!isWithinBoard(pos)) {
      return
    }

    this.grid[pos.rank]![pos.file] = piece

    if (piece) {
      piece.position = pos;
    }
  }
}
