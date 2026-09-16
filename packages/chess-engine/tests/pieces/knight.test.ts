import { describe, expect, test } from "vitest";
import { Knight } from "../../src/pieces/Knight";

describe("Knight", () => {
    test("generates move candidates from d4", () => {
        const knight = new Knight("white", {
            file: 3,
            rank: 4,
        });

        const moves = knight.getMoveCandidates();

        console.log(moves);

        expect(moves).toHaveLength(8);
    });
});
