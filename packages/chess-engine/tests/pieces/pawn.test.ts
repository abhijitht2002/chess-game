import { describe, expect, test } from "vitest";
import { Pawn } from "../../src/pieces/Pawn.js";

describe("Pawn", () => {
  test("returns the correct movement pattern", () => {
    const piece = new Pawn("white", { file: 0, rank: 0 });
    const pattern = piece.getMovementPattern();
    expect(pattern).toEqual({ type: "pawn" });
  });
});
