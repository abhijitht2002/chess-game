import { getAllLegalMoves } from "./getAllLegalMoves.js";
import { isInCheck } from "./isInCheck.js";

export function isCheckmate(board, color) {
    const legalMoves = getAllLegalMoves(board, color)
    return isInCheck(board, color) && legalMoves.length === 0
}

export function isStalemate(board, color) {
    const legalMoves = getAllLegalMoves(board, color)
    return !isInCheck(board, color) && legalMoves.length === 0
}
