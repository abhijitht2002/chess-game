import { board, initializePieces, testBoard } from "./engine/state.js";
import { handleClick } from "./ui/events.js";
import { renderBoard } from "./ui/render.js";

// initializePieces(board);
testBoard(board);

renderBoard(board, handleClick);
