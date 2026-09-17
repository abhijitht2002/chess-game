/**
 * Purpose:
 * Defines the different types of movement capabilities for pieces.
 * Supports sliding rays, discrete steps, and unique pawn behavior.
 *
 * Related:
 * - ./Vector2D.ts
 */
import type { Vector2D } from "./Vector2D.js";

export type MovementPattern =
    | {
        type: "sliding";
        directions: Vector2D[];
    }
    | {
        type: "stepping";
        offsets: Vector2D[];
    }
    | {
        type: "pawn";
    };
