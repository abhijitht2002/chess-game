import { describe, expect, test } from "vitest";
import { Rook } from "../../src/pieces/Rook.js";

describe("Rook", () => {
  test("returns the correct movement pattern", () => {
    const piece = new Rook("white", { file: 0, rank: 0 });
    const pattern = piece.getMovementPattern();
    expect(pattern).toEqual({
      type: "sliding",
      directions: [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
      ],
    });
  });
});
