import { initializePieces, state, testBoard } from "./engine/state.js";
import { renderApp } from "./ui/renderApp.js";

initializePieces(state.board);
// testBoard(state.board);

renderApp()
