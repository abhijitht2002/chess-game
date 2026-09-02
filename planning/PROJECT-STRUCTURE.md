# Project Structure

```text

chess-game/
├── apps/
│   └── web/
│
├── packages/
│   └── chess/
│       └── src/
│
├── planning/
│   ├── ARCHITECTURE.md
│   └── PROJECT-STRUCTURE.md
│
├── prototype/
│   ├── assets/
│   ├── css/
│   ├── js/
│   └── index.html
│
└── README.md
```

## Directory Responsibilities

### apps/

Contains runnable applications.

### apps/web/

Contains the web application and its presentation layer.

### packages/

Contains reusable code shared between applications.

### packages/chess/

Contains the core chess logic, including game state, rules, move validation, and related chess-domain logic.

### planning/

Contains project architecture, project structure, decisions, and development planning documents.

### prototype/

Contains the existing prototype implementation used as the starting point for the refactor. It is not the target production architecture.

## Current Status

- `prototype/` contains the existing working implementation.
- `apps/web/` is the target web application.
- `packages/chess/` is the target location for framework-independent chess logic.
- Refactoring from `prototype/` into the new architecture is in progress.
