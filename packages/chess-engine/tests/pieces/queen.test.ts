import { describe, expect, test } from "vitest";
import { Queen } from "../../src/pieces/Queen.js";

describe("Queen", () => {
    test("returns the correct movement pattern", () => {
        const piece = new Queen("white", { file: 0, rank: 0 });
        const pattern = piece.getMovementPattern();
        expect(pattern).toEqual({
            type: "sliding",
            directions: [
                [0, 1],
                [0, -1],
                [1, 0],
                [-1, 0],
                [1, 1],
                [1, -1],
                [-1, 1],
                [-1, -1],
            ],
        });
    });
});
