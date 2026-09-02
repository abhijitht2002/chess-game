import { generateBoard } from "../engine/board.js"
import { initializePieces, state } from "../engine/state.js"
import { renderApp } from "./renderApp.js"

const parent = document.getElementById("parent-container")
let gameOverEl = null

export function popGameOver(status, winner) {
    const c = document.createElement("div")
    c.classList.add("game-over")

    const h = document.createElement("h1")
    h.innerHTML = `${status}!`
    c.appendChild(h)

    const p = document.createElement("p")
    p.innerHTML = winner ? `winner: ${winner}` : 'draw'
    c.appendChild(p)

    const b = document.createElement("button")
    b.innerHTML = "New Game"

    b.addEventListener('click', removeGameOver)
    c.appendChild(b)

    parent.appendChild(c)

    gameOverEl = c
}

export function removeGameOver() {
    state.board = generateBoard()
    initializePieces(state.board)
    state.appPhase = "splash"
    state.player["WHITE"] = null
    state.player["BLACK"] = null
    state.mode = "test"
    state.status = null
    state.winner = null
    // state.highlights = []
    // state.selected = null
    state.phase = "select"
    state.turn = "WHITE"

    if (gameOverEl) {
        parent.removeChild(gameOverEl)
        gameOverEl = null
    }

    renderApp()
}
