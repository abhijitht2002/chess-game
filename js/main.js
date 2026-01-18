import { board, initializePieces } from "./engine/state.js";
import { handleClick } from "./ui/events.js";
import { renderBoard } from "./ui/render.js";

initializePieces(board);

renderBoard(board, handleClick);
