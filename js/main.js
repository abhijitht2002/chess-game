import { generateBoard, initializePieces } from "./engine/board.js";
import { renderBoard } from "./ui/render.js";


const board = generateBoard()
initializePieces(board)
renderBoard(board)
