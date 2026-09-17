import { describe, expect, test } from "vitest";
import { MoveGenerator } from "../src/board/MoveGenerator.js";
import { Board } from "../src/board/Board.js";
import { Rook } from "../src/pieces/Rook.js";
import { Pawn } from "../src/pieces/Pawn.js";
import { Knight } from "../src/pieces/Knight.js";
import { Bishop } from "../src/pieces/Bishop.js";

describe("MoveGenerator", () => {
    test("generates correct moves for a sliding piece on an empty board", () => {
        const board = new Board();
        const rook = new Rook("white", { file: 3, rank: 3 });
        const generator = new MoveGenerator(board);
        const moves = generator.generateMoves(rook);
        expect(moves.length).toBe(14); // 7 vertical, 7 horizontal
    });

    test("stops sliding when encountering friendly piece", () => {
        const board = new Board();
        const rook = new Rook("white", { file: 0, rank: 0 }); // A8 in file/rank? Wait, rank 0 is usually rank 8 or 1. Let's just use indices.
        const ally = new Rook("white", { file: 0, rank: 3 });
        board.setPieceAt(rook.position, rook);
        board.setPieceAt(ally.position, ally);

        const generator = new MoveGenerator(board);
        const moves = generator.generateMoves(rook);

        // Can move to file 0 rank 1, 2. (2 squares) plus file 1..7 rank 0 (7 squares) = 9
        expect(moves.length).toBe(9);
    });

    test("captures enemy piece and stops sliding", () => {
        const board = new Board();
        const rook = new Rook("white", { file: 0, rank: 0 });
        const enemy = new Rook("black", { file: 0, rank: 3 });
        board.setPieceAt(rook.position, rook);
        board.setPieceAt(enemy.position, enemy);

        const generator = new MoveGenerator(board);
        const moves = generator.generateMoves(rook);

        // Can move to file 0 rank 1, 2, and 3(capture). (3 squares) plus file 1..7 rank 0 (7 squares) = 10
        expect(moves.length).toBe(10);
    });

    test("knight jumps over pieces", () => {
        const board = new Board();
        const knight = new Knight("white", { file: 4, rank: 4 });

        // Surround knight with friendly pieces (they shouldn't block jumps)
        for (let df = -1; df <= 1; df++) {
            for (let dr = -1; dr <= 1; dr++) {
                if (df === 0 && dr === 0) continue;
                board.setPieceAt({ file: 4 + df, rank: 4 + dr }, new Pawn("white", { file: 4 + df, rank: 4 + dr }));
            }
        }

        const generator = new MoveGenerator(board);
        const moves = generator.generateMoves(knight);

        // All 8 jumps should still be valid as they are stepping off the adjacent squares
        expect(moves.length).toBe(8);
    });

    test("pawn moves and captures correctly", () => {
        const board = new Board();
        const pawn = new Pawn("white", { file: 4, rank: 6 }); // Starts at rank 6 (white starting rank in standard array?)
        const enemy = new Pawn("black", { file: 5, rank: 5 }); // diagonal capture
        board.setPieceAt(pawn.position, pawn);
        board.setPieceAt(enemy.position, enemy);

        const generator = new MoveGenerator(board);
        const moves = generator.generateMoves(pawn);

        // One step: E3 (rank 5), Two steps E4 (rank 4), Capture F3 (file 5, rank 5)
        // Wait, rank offsets might be 1. Pawn direction is -1 for white, so rank 6 -> 5 -> 4.
        expect(moves.length).toBe(3);
    });

    test("bishop ray blocking", () => {
        const board = new Board();
        const bishop = new Bishop("white", { file: 4, rank: 4 });
        const enemy = new Pawn("black", { file: 6, rank: 6 });
        board.setPieceAt(bishop.position, bishop);
        board.setPieceAt(enemy.position, enemy);

        const generator = new MoveGenerator(board);
        const moves = generator.generateMoves(bishop);

        // Should stop after capturing at 6,6.
        expect(moves.some(m => m.to.file === 6 && m.to.rank === 6)).toBe(true);
        expect(moves.some(m => m.to.file === 7 && m.to.rank === 7)).toBe(false);
    });
});
