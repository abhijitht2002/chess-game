import { describe, expect, test } from "vitest";
import { Rook } from "../../src/pieces/Rook";

describe("Rook", () => {
  test("generates move candidates from d4", () => {
    const rook = new Rook("white", {
      file: 3,
      rank: 4,
    });

    const moves = rook.getMoveCandidates();

    console.log(moves);

    expect(moves).toHaveLength(14);
  });
});
