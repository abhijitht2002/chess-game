# Tech Stack

> Defines the technologies, languages, frameworks, libraries, and development tools used by the chess game project and their intended roles.

**Purpose:** Provide a single reference for the project's technology choices and prevent unnecessary changes to the stack during development.

**Related Files:**

- `planning/ARCHITECTURE.md` — Defines how the technologies fit into the application architecture.
- `planning/PROJECT-STRUCTURE.md` — Defines where technologies and their code belong.
- `README.md` — Provides project overview and setup information.
- `package.json` — Defines project dependencies and scripts.

---

## Languages

| Technology | Usage                                                             |
| ---------- | ----------------------------------------------------------------- |
| TypeScript | Primary language for application and game logic                   |
| JavaScript | Existing prototype implementation and JavaScript-specific tooling |
| HTML       | Web application structure                                         |
| CSS        | Web application styling                                           |

---

## Frontend

| Technology | Usage                                  |
| ---------- | -------------------------------------- |
| React      | Web application UI                     |
| Vite       | Frontend development and build tooling |

> Frontend technologies belong primarily under `apps/web/`.

---

## Backend

| Technology                | Usage                                     |
| ------------------------- | ----------------------------------------- |
| Node.js                   | Server-side JavaScript/TypeScript runtime |
| [Framework to be decided] | Backend application                       |

> Backend technology will be finalized when the multiplayer architecture is implemented.

---

## Game Core

| Technology | Usage                                                           |
| ---------- | --------------------------------------------------------------- |
| TypeScript | Chess rules, game state, move validation, and game-domain logic |

The chess core should remain independent of browser-specific technologies.

The core will be located under:

```text
packages/
└── chess/
```
