import { describe, expect, test } from "vitest";
import { Queen } from "../../src/pieces/Queen";

describe("Queen", () => {
    test("generates move candidates from d5", () => {
        const queen = new Queen("white", {
            file: 3,
            rank: 3,
        });

        const moves = queen.getMoveCandidates();

        console.log(moves);

        expect(moves).toHaveLength(27);
    });
});
