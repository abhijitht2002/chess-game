import type { Position } from "../board/Position.js";
import type { Vector2D } from "../types/Vector2D.js";
import { isWithinBoard } from "../board/isWithinBoard.js";

export function generateSlidingMoves(position: Position, directions: Vector2D[]): Position[] {
  const moves: Position[] = [];
  for (const [df, dr] of directions) {
    let file = position.file + df;
    let rank = position.rank + dr;
    while (isWithinBoard({ file, rank })) {
      moves.push({ file, rank });
      file += df;
      rank += dr;
    }
  }
  return moves;
}

export function generateSteppingMoves(position: Position, offsets: Vector2D[]): Position[] {
  const moves: Position[] = [];
  for (const [df, dr] of offsets) {
    const file = position.file + df;
    const rank = position.rank + dr;
    if (isWithinBoard({ file, rank })) {
      moves.push({ file, rank });
    }
  }
  return moves;
}
