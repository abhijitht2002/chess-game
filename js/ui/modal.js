import { state } from "../engine/state.js"
import { renderApp } from "./renderApp.js"

const colorBtns = document.querySelectorAll(".color-btn")
let selectedColor = "RANDOM"

const startBtn = document.getElementById("start-game-btn")

export const showModal = (id) => {
    document.getElementById(id).classList.remove("hidden")
}

export const hideModal = (id) => {
    document.getElementById(id).classList.add("hidden")
}

export const getSelectedColor = () => {
    if (selectedColor === "RANDOM") {
        return Math.random() < 0.5 ? "WHITE" : "BLACK"
    }
    return selectedColor
}

colorBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        colorBtns.forEach((b) => b.classList.remove("active"))

        btn.classList.add("active")
        selectedColor = btn.dataset.color
    });
})

startBtn.addEventListener("click", () => {
    const color = getSelectedColor();

    state.appPhase = "playing"
    // state.mode = mode
    state.player.color = color

    console.log(selectedColor);
    console.log(`color: ${color}`);
    console.log(state);
    renderApp()
})
