import { describe, expect, test } from "vitest";
import { Knight } from "../../src/pieces/Knight.js";

describe("Knight", () => {
    test("returns the correct movement pattern", () => {
        const piece = new Knight("white", { file: 0, rank: 0 });
        const pattern = piece.getMovementPattern();
        expect(pattern).toEqual({
            type: "stepping",
            offsets: [
                [-2, -1],
                [-2, 1],
                [-1, -2],
                [-1, 2],
                [1, -2],
                [1, 2],
                [2, -1],
                [2, 1],
            ],
        });
    });
});
