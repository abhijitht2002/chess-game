import type { Position } from "./Position.js";

export function isWithinBoard(position: Position): boolean {
  return (
    position.file >= 0 &&
    position.file < 8 &&
    position.rank >= 0 &&
    position.rank < 8
  );
}
