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
