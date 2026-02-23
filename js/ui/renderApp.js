import { state } from "../engine/state.js";
import { handleClick } from "./events.js";
import { hideModal, showModal } from "./modal.js";
import { renderBoard } from "./render.js";

export const renderApp = () => {
    renderBoard(state.board, handleClick);

    switch (state.appPhase) {
        case "modeSelect":
            showModal("mode-modal");
            break;

        case "playing":
            hideModal("mode-modal")
            break;

        case "gameOver":
            console.log("game Over");
            break;

    }
}