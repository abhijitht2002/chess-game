import { describe, expect, test } from "vitest";
import { Pawn } from "../src/pieces/Pawn";

describe("Pawn", () => {
  const pawn = new Pawn("white", {
    file: 1,
    rank: 6,
  });

  test("generates forward movement candidates from starting position", () => {
    const moves = pawn.getMoveCandidates();

    expect(moves).toContainEqual({
      file: 1,
      rank: 5,
    });

    expect(moves).toContainEqual({
      file: 1,
      rank: 4,
    });
  });

  test("generates capture destinations", () => {
    const moves = pawn.getMoveCandidates();

    expect(moves).toContainEqual({
      file: 0,
      rank: 5,
    });

    expect(moves).toContainEqual({
      file: 2,
      rank: 5,
    });
  });
});
