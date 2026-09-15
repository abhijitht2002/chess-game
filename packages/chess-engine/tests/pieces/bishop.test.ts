import { describe, expect, test } from "vitest";
import { Bishop } from "../../src/pieces/Bishop";

describe("Bishop", () => {
    test("generates move candidates from d4", () => {
        const bishop = new Bishop("white", {
            file: 3,
            rank: 4,
        });

        const moves = bishop.getMoveCandidates();

        console.log(moves);

        expect(moves).toHaveLength(13);
    });
});
