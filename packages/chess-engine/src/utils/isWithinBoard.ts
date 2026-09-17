/**
 * Purpose:
 * Determines if a given position falls within the 8x8 board boundaries.
 * Prevents out-of-bounds errors during piece movement.
 */
import type { Position } from "../board/Position.js";

export function isWithinBoard(position: Position): boolean {
  return (
    position.file >= 0 &&
    position.file < 8 &&
    position.rank >= 0 &&
    position.rank < 8
  );
}
