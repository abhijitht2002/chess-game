import { initializePieces, state, testBoard } from "./engine/state.js";
import { handleClick } from "./ui/events.js";
import { renderBoard } from "./ui/render.js";

initializePieces(state.board);
// testBoard(state.board);

renderBoard(state.board, handleClick);
