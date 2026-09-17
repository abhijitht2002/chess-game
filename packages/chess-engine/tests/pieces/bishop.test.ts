import { describe, expect, test } from "vitest";
import { Bishop } from "../../src/pieces/Bishop.js";

describe("Bishop", () => {
    test("returns the correct movement pattern", () => {
        const piece = new Bishop("white", { file: 0, rank: 0 });
        const pattern = piece.getMovementPattern();
        expect(pattern).toEqual({
            type: "sliding",
            directions: [
                [1, 1],
                [1, -1],
                [-1, 1],
                [-1, -1],
            ],
        });
    });
});
