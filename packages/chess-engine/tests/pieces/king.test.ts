import { describe, expect, test } from "vitest";
import { King } from "../../src/pieces/King";

describe("King", () => {
    test("generates move candidates from d5", () => {
        const king = new King("white", {
            file: 3,
            rank: 3,
        });

        const moves = king.getMoveCandidates();

        console.log(moves);

        expect(moves).toHaveLength(8);
    });
});
