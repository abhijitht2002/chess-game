import { onSquareClicked } from "../mousecontroller/mousecontroller.js"
import { king, queen, rook, knight, bishop, pawn, piece } from "../piece/piece.js"

const pieceImages = new Map()
export const squareElements = []

export function initializeBoard(){

    const board = boardGenerator(8)
    
    initializePieces(board)

    console.log(board)
    
    drawBoard()

    console.log(squareElements)

    drawAllPieces(board)

    onSquareClicked(board)


}

export function boardGenerator(size){

    const board = new Array(size).fill(null).map(() => new Array(size).fill(null))

    return board

}

export function drawBoard(){

    const boardContainer = document.getElementById('chessboard')
    const filesContainer = document.getElementById('files')
    const ranksContainer = document.getElementById('ranks')
    
    // boardContainer.innerHTML = ''
    // filesContainer.innerHTML = ''
    // ranksContainer.innerHTML = ''

    const files = ['A','B','C','D','E','F','G','H']
    const ranks = [8,7,6,5,4,3,2,1]

    // drawing files (a-h) label
    files.forEach(file => {
        const block = document.createElement('div')
        block.textContent = file
        filesContainer.appendChild(block)
    })

    // drawing ranks (1-8) label
    ranks.forEach(rank => {
        const block = document.createElement('div')
        block.textContent = rank
        ranksContainer.appendChild(block)
    })

    // drawing chessboard
    for(let row = 0; row < 8; row++){

        squareElements[row] = []

        for(let col = 0; col < 8; col++){

            const square = document.createElement('div')
            square.classList.add('square')

            if((row+col)%2===0){
                square.classList.add('light')
            }else{
                square.classList.add('dark')
            }

            boardContainer.appendChild(square)

            squareElements[row][col] = square

        }
    }
}

export function drawPiece(piece){
    
    const square = squareElements[piece.row][piece.col]
    if(!square) return

    const img = pieceImages.get(piece.getPiecename())
    if(!img) return

    const pieceImg = img.cloneNode()
    pieceImg.classList.add('piece')

    square.appendChild(pieceImg)

}

function drawAllPieces(board){
    for(let row = 0; row < board.length; row++){
        for(let col = 0; col < board[0].length; col++){
            const piece = board[row][col]
            if(piece) drawPiece(piece)
        }
    }

}

function loadPieceImages(){
    const pieces = ["KING", "QUEEN", "KNIGHT", "BISHOP", "ROOK", "PAWN"]
    const colors = ["BLACK", "WHITE"]

    colors.forEach(color => {
        pieces.forEach(piece => {
            const key = `${color}_${piece}`
            const img = new Image()
            img.src = `images/pieces/${key}.png`
            pieceImages.set(key, img)
        })
    })
}

export function initializePieces(board){
    //  black pieces
    //  back row
    board[0][0] = new rook("BLACK", 0, 0)
    board[0][1] = new knight("BLACK", 0, 1)
    board[0][2] = new bishop("BLACK", 0, 2)
    board[0][3] = new queen("BLACK", 0, 3)
    board[0][4] = new king("BLACK", 0, 4)
    board[0][5] = new bishop("BLACK", 0, 5)
    board[0][6] = new knight("BLACK", 0, 6)
    board[0][7] = new rook("BLACK", 0, 7)
    //  front row
    // pawn
    for(let i = 0; i < 8 ; i++){
        board[1][i] = new pawn("BLACK", 1, i)
    }

    //  white pieces
    //  back row
    board[7][0] = new rook("WHITE", 7, 0)
    board[7][1] = new knight("WHITE", 7, 1)
    board[7][2] = new bishop("WHITE", 7, 2)
    board[7][3] = new queen("WHITE", 7, 3)
    board[7][4] = new king("WHITE", 7, 4)
    board[7][5] = new bishop("WHITE", 7, 5)
    board[7][6] = new knight("WHITE", 7, 6)
    board[7][7] = new rook("WHITE", 7, 7)
    //  front row
    //  white pawns
    for(let i = 0; i < 8 ; i++){
        board[6][i] = new pawn("WHITE", 6, i)
    }
}

export function getPiece(board, row, col){
    return board[row][col]
}

// initializePieces()
loadPieceImages()
console.log(pieceImages)
