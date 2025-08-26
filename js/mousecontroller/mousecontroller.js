import { getPiece, squareElements } from "../board/board.js";


export function onSquareClicked(board){
    for(let row = 0; row < 8; row++){
        for(let col = 0; col < 8; col++){
            
            const square = squareElements[row][col]
            const piece = getPiece(board, row,col)

            square.addEventListener("click", () => {
                console.log(`clicked on (${row}, ${col})`)
                console.log("clicked on: " + piece.getPiecename())

            })

        }

    }
}