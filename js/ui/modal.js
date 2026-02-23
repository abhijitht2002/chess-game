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
    return document.querySelector('input[name="mode"]:checked').id;
}

export const getSelectedColor = () => {
    
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

    state.appPhase = "playing"
    console.log(state);
    console.log(getSelectedMode());
    renderApp()

})

singleRadio.addEventListener("change", updateModeUI);
multiRadio.addEventListener("change", updateModeUI);

updateModeUI();
