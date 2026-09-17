import { describe, expect, test } from "vitest";
import { King } from "../../src/pieces/King.js";

describe("King", () => {
    test("returns the correct movement pattern", () => {
        const piece = new King("white", { file: 0, rank: 0 });
        const pattern = piece.getMovementPattern();
        expect(pattern).toEqual({
            type: "stepping",
            offsets: [
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
