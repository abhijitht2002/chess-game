/**
 * Purpose:
 * Defines the structure of a chess move.
 * Stores the starting and ending positions of a piece.
 *
 * Related:
 * - ../board/Position.ts
 */
import type { Position } from "../board/Position.js";

export type Move = {
    from: Position;
    to: Position;
};
