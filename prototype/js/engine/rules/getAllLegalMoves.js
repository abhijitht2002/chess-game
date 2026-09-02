import { getLegalMoves } from "../moveGen/legal.js"

export const getAllLegalMoves = (board, color) => {
    const allMoves = []
    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            const p = board[r][c]
            if (p && p.color === color) {
                const moves = getLegalMoves(board, r, c)

                for (const move of moves) {
                    allMoves.push(move)
                }
            }
        }
    }
    return allMoves
}
