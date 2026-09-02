import { state } from "../engine/state.js";
import { handleClick } from "./events.js";
import { popGameOver } from "./gameOver.js";
import { hideModal, showModal } from "./modal.js";
import { renderBoard } from "./render.js";

export const renderApp = () => {
    renderBoard(state.board, handleClick);

    switch (state.appPhase) {
        case "splash":
            showModal("mode-modal");
            break;

        case "playing":
            hideModal("mode-modal")
            break;

        case "gameOver":
            popGameOver(state.status, state.winner)
            break;
    }
}