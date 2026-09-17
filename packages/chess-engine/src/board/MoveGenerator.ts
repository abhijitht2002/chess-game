import type { Piece } from "../pieces/Piece.js";
import type { Move } from "../types/Move.js";
import type { Board } from "./Board.js";
import { isWithinBoard } from "./isWithinBoard.js";

export class MoveGenerator {
    constructor(private board: Board) { }

    generateMoves(piece: Piece): Move[] {
        const pattern = piece.getMovementPattern();
        const moves: Move[] = [];
        const from = piece.position;
        const color = piece.color;

        if (pattern.type === "sliding") {
            for (const [df, dr] of pattern.directions) {
                let file = from.file + df;
                let rank = from.rank + dr;

                while (isWithinBoard({ file, rank })) {
                    const toSquare = this.board.getPieceAt({ file, rank });

                    if (!toSquare) {
                        moves.push({ from, to: { file, rank } });
                    } else {
                        if (toSquare.color !== color) {
                            moves.push({ from, to: { file, rank } });
                        }
                        break;
                    }
                    file += df;
                    rank += dr;
                }
            }
        } else if (pattern.type === "stepping") {
            for (const [df, dr] of pattern.offsets) {
                const file = from.file + df;
                const rank = from.rank + dr;

                if (isWithinBoard({ file, rank })) {
                    const toSquare = this.board.getPieceAt({ file, rank });
                    if (!toSquare || toSquare.color !== color) {
                        moves.push({ from, to: { file, rank } });
                    }
                }
            }
        } else if (pattern.type === "pawn") {
            const direction = color === "white" ? -1 : 1;
            const startRank = color === "white" ? 6 : 1;

            // One square forward
            let file = from.file;
            let rank = from.rank + direction;
            if (isWithinBoard({ file, rank }) && !this.board.getPieceAt({ file, rank })) {
                moves.push({ from, to: { file, rank } });

                // Two squares forward
                if (from.rank === startRank) {
                    rank = from.rank + 2 * direction;
                    if (isWithinBoard({ file, rank }) && !this.board.getPieceAt({ file, rank })) {
                        moves.push({ from, to: { file, rank } });
                    }
                }
            }

            // Captures
            const captureFiles = [from.file - 1, from.file + 1];
            for (const capFile of captureFiles) {
                const capRank = from.rank + direction;
                if (isWithinBoard({ file: capFile, rank: capRank })) {
                    const target = this.board.getPieceAt({ file: capFile, rank: capRank });
                    if (target && target.color !== color) {
                        moves.push({ from, to: { file: capFile, rank: capRank } });
                    }
                }
            }
        }

        return moves;
    }
}
