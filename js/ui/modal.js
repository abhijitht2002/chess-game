import { state } from "../engine/state.js"
import { renderApp } from "./renderApp.js"

const singleRadio = document.getElementById("single")
const multiRadio = document.getElementById("multi")

const singleOptions = document.getElementById("single-options");
const multiOptions = document.getElementById("multi-options");

const colorBtns = document.querySelectorAll(".color-btn")
let selectedColor = "RANDOM"

const startBtn = document.getElementById("start-game-btn")

export const showModal = (id) => {
    document.getElementById(id).classList.remove("hidden")
}

export const hideModal = (id) => {
    document.getElementById(id).classList.add("hidden")
}

export const getSelectedMode = () => {
    const selectedMode = document.querySelector('input[name="mode"]:checked').id;
    return selectedMode === "single" ? "AI" : "multiplayer"
}

export const getSelectedColor = () => {
    if (selectedColor === "RANDOM") {
        return Math.random() < 0.5 ? "WHITE" : "BLACK"
    }
    return selectedColor
}

function updateModeUI() {
    if (singleRadio.checked) {
        singleOptions.classList.remove("hidden");
        multiOptions.classList.add("hidden");
    } else {
        singleOptions.classList.add("hidden");
        multiOptions.classList.remove("hidden");
    }
}

colorBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        colorBtns.forEach((b) => b.classList.remove("active"))

        btn.classList.add("active")
        selectedColor = btn.dataset.color
    });
})



startBtn.addEventListener("click", () => {
    const mode = getSelectedMode();
    const color = getSelectedColor();

    state.appPhase = "playing"
    state.mode = mode
    state.player.color = color

    console.log(selectedColor);
    console.log(`mode: ${mode}, color: ${color}`);
    console.log(state);
    renderApp()
})

singleRadio.addEventListener("change", updateModeUI);
multiRadio.addEventListener("change", updateModeUI);

updateModeUI();
