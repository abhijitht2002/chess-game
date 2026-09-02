# Getting Started

This document explains how the chess-game project is initialized and how the development environment is structured.

It is written to be useful both when setting up the project for the first time and when returning to the project later.

---

## 1. Project Goal

The project is organized as a **pnpm monorepo**.

The current project is small, but the structure is designed to support multiple parts of the chess game as it grows.

The intended structure is:

```text
chess-game/
├── apps/
│   └── web/
│
├── packages/
│   ├── chess-engine/
│   ├── ai-engine/
│   └── shared/
│
├── docs/
│
├── package.json
├── pnpm-workspace.yaml
└── pnpm-lock.yaml

```

The important distinction is:

- `apps/` → runnable applications
- `packages/` → reusable project packages
- `docs/` → project documentation

The current work is focused on:

```text
packages/chess-engine/

```

---

# 2. Why a Monorepo?

A monorepo keeps related parts of the same project inside one repository.

For this chess project, the game may eventually contain:

```text
web application
      │
      ├── chess-engine
      ├── ai-engine
      └── shared

```

The frontend should not contain all the chess rules itself.

Instead:

```text
apps/web
    ↓
packages/chess-engine
    ↓
chess rules and game logic

```

Later, an AI system can use the same engine:

```text
apps/web
    ↓
packages/chess-engine
    ↑
packages/ai-engine

```

This gives the project a clear separation between the application and the underlying systems.

---

# 3. Why pnpm?

The project uses **pnpm** as its package manager.

pnpm is responsible for:

- installing dependencies
- managing package versions
- managing the workspace
- running package scripts
- maintaining the lockfile

The project uses:

```text
pnpm 11.25.0

```

The version is pinned in the root `package.json`:

```json
"packageManager": "pnpm@11.25.0"

```

This means the project has an explicit package-manager version instead of relying on whatever pnpm version happens to be installed on a machine.

---

# 4. Installing pnpm

pnpm is a development tool used by the project.

It does not need to be installed inside the project's `node_modules`.

The project uses Node.js and Corepack to manage pnpm.

The initial setup was:

```cmd
corepack enable
corepack prepare pnpm@latest --activate

```

Then verify:

```cmd
pnpm -v

```

Expected version:

```text
11.25.0

```

If `corepack enable` produces a Windows permission error, run the command from an elevated/Administrator CMD.

---

# 5. Root `package.json`

The root `package.json` belongs to the **monorepo itself**.

It is not the chess engine.

Current structure:

```text
chess-game/
└── package.json

```

The root configuration is:

```json
{
  "name": "chess-game",
  "version": "1.0.0",
  "private": true,
  "description": "Chess game monorepo",
  "scripts": {},
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devEngines": {
    "packageManager": {
      "name": "pnpm",
      "version": "11.25.0",
      "onFail": "download"
    }
  },
  "packageManager": "pnpm@11.25.0",
  "type": "module"
}

```

## Important fields

### `name`

```json
"name": "chess-game"

```

This identifies the repository/workspace.

### `private`

```json
"private": true

```

The root is not intended to be published as an npm package.

This is especially useful for monorepos because the root exists primarily to manage the project.

### `packageManager`

```json
"packageManager": "pnpm@11.25.0"

```

This declares the package manager and version expected by the project.

### `type`

```json
"type": "module"

```

The project uses modern JavaScript ES modules.

---

# 6. `pnpm-workspace.yaml`

The root contains:

```text
pnpm-workspace.yaml

```

Its current contents are:

```yaml
packages:
  - "packages/*"

```

This tells pnpm:

> Treat directories directly inside `packages/` as workspace packages.

For example:

```text
packages/
├── chess-engine/
├── ai-engine/
└── shared/

```

would automatically become workspace packages.

The workspace therefore does not require manually registering every package.

---

# 7. Package vs Workspace

This distinction is important.

The root:

```text
chess-game/

```

is the **workspace**.

Inside it:

```text
packages/chess-engine/

```

is a **package**.

So:

```text
chess-game
    ↓
pnpm workspace
    ↓
chess-engine package

```

The root manages the overall project.

The package contains the actual chess-engine code.

---

# 8. The Chess Engine Package

The current package is:

```text
packages/
└── chess-engine/
    ├── package.json
    ├── tsconfig.json
    └── src/

```

Its `package.json` is currently:

```json
{
  "name": "chess-engine",
  "version": "1.0.0",
  "private": true,
  "description": "Chess engine for the chess-game project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "module"
}

```

The package is marked private because it is currently an internal part of the chess-game project.

The `main` field will be updated when the engine's actual entry point is established.

---

# 9. Why TypeScript Is Installed at the Root

TypeScript is a **development/build tool**, not something that belongs exclusively to the chess engine.

The project therefore installs TypeScript at the workspace root.

From the root:

```cmd
pnpm add -D typescript -w

```

The `-w` means:

```text
workspace root

```

So the dependency belongs to:

```text
chess-game/

```

rather than specifically to:

```text
packages/chess-engine/

```

This is useful because future packages can also use TypeScript:

```text
packages/
├── chess-engine/    → TypeScript
├── ai-engine/       → TypeScript
└── shared/          → TypeScript

```

There is no need to install a separate TypeScript copy into every package.

---

# 10. Why `node_modules` Can Still Appear Inside Packages

Installing a dependency at the workspace root does not mean every package will necessarily have no `node_modules` directory.

pnpm uses links and workspace-specific dependency structures.

For example, you may see:

```text
chess-game/
├── node_modules/
└── packages/
    └── chess-engine/
        └── node_modules/

```

This is not automatically a problem.

The important point is **where the dependency is declared**.

For TypeScript:

```text
root package.json
        ↓
devDependency
        ↓
TypeScript

```

rather than declaring TypeScript separately in every package.

---

# 11. TypeScript Configuration

TypeScript is installed at the workspace level, but the compiler configuration belongs to the package that is being compiled.

Therefore:

```text
packages/chess-engine/
└── tsconfig.json

```

The current configuration is:

```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",

    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "target": "ESNext",

    "strict": true,

    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,

    "verbatimModuleSyntax": true,
    "isolatedModules": true,

    "declaration": true,
    "sourceMap": true,

    "skipLibCheck": true
  },

  "include": ["src"]
}

```

---

# 12. `rootDir`

```json
"rootDir": "./src"

```

This tells TypeScript where the source code starts.

For example:

```text
src/
├── pieces/
├── board/
└── rules/

```

---

# 13. `outDir`

```json
"outDir": "./dist"

```

This tells TypeScript where compiled JavaScript should go.

Conceptually:

```text
src/
    piece.ts

       ↓ TypeScript compiler

dist/
    piece.js

```

The source code remains in `src/`.

The generated JavaScript goes into `dist/`.

---

# 14. `include`

```json
"include": ["src"]

```

This tells TypeScript which project files it should consider.

In this package:

```text
packages/chess-engine/src/

```

is the source directory.

---

# 15. Why `target` Is `ESNext`

The project currently uses:

```json
"target": "ESNext"

```

This tells TypeScript to target modern JavaScript.

The project is not currently intended to support old JavaScript environments, so there is no need to deliberately target an old ECMAScript version.

`ESNext` is therefore acceptable for this project.

---

# 16. Why `module` Is `NodeNext`

The project uses modern ES modules:

```json
"type": "module"

```

and TypeScript uses:

```json
"module": "NodeNext"

```

This allows TypeScript's module behavior to align with modern Node.js ESM behavior.

---

# 17. Strict TypeScript

The engine uses:

```json
"strict": true

```

This enables TypeScript's strict type-checking features.

For a rules-heavy system such as a chess engine, strict typing is useful because the code deals with things such as:

```text
pieces
boards
coordinates
moves
colors
game states
rules

```

Type mistakes should ideally be detected during development rather than becoming runtime bugs.

---

# 18. `noUncheckedIndexedAccess`

The engine also uses:

```json
"noUncheckedIndexedAccess": true

```

This is particularly useful for board-related code.

Consider:

```ts
board[row][column]

```

Without stricter checking, it can be easy to assume that an indexed value always exists.

With this option, TypeScript is more cautious about indexed access.

That is useful for a chess board because coordinates can be outside the valid range.

---

# 19. `exactOptionalPropertyTypes`

The project uses:

```json
"exactOptionalPropertyTypes": true

```

This makes optional properties behave more precisely.

This is useful when modeling things such as:

```ts
interface Move {
  from: Position;
  to: Position;
  captured?: Piece;
}

```

An optional property should have a deliberate meaning rather than being treated loosely.

---

# 20. Declaration Files

The project uses:

```json
"declaration": true

```

When TypeScript builds the package, it can generate:

```text
.d.ts

```

files containing the package's type information.

This becomes useful when another package consumes the chess engine.

For example:

```text
apps/web
    ↓
chess-engine
    ↓
generated JavaScript + TypeScript declarations

```

---

# 21. Source Maps

The project uses:

```json
"sourceMap": true

```

Source maps help development tools connect generated JavaScript back to the original TypeScript source.

For example:

```text
dist/game.js
      ↓
src/game.ts

```

This makes debugging compiled code easier.

---

# 22. `src` and `dist`

The basic TypeScript package layout is:

```text
packages/
└── chess-engine/
    ├── src/
    │   └── ...
    │
    ├── dist/
    │   └── ...
    │
    ├── package.json
    └── tsconfig.json

```

`src/` is written by us.

`dist/` is generated by TypeScript.

Therefore:

```text
src   → source
dist  → build output

```

The `dist/` directory should normally not be manually edited.

---

# 23. Verifying TypeScript

From the workspace root, a package can be checked with:

```cmd
pnpm --filter chess-engine exec tsc --noEmit

```

The command means:

```text
pnpm
  ↓
select the chess-engine package
  ↓
run TypeScript compiler
  ↓
--noEmit = don't generate output

```

At the initial setup stage, this command produced:

```text
TS18003: No inputs were found

```

This was expected because the `src/` directory did not yet contain TypeScript source files.

The important part was that TypeScript successfully found the package's `tsconfig.json`.

Once `.ts` source files exist, this command becomes a meaningful type-check.

---

# 24. Why We Did Not Add `allowJs`

The existing chess implementation started as JavaScript.

It might seem convenient to configure TypeScript with:

```json
"allowJs": true

```

so the existing JavaScript files can immediately be compiled.

We deliberately did not do that.

The goal is not merely to make the old JavaScript project compile under TypeScript.

The goal is to **migrate the engine properly into a TypeScript architecture**.

Therefore:

```text
old JavaScript
      ↓
understand existing logic
      ↓
reorganize responsibilities
      ↓
rewrite/migrate into TypeScript

```

rather than:

```text
old JavaScript
      ↓
allowJs
      ↓
call it TypeScript

```

---

# 25. Package Manager Files

After setting up pnpm, the project uses:

```text
package.json
pnpm-workspace.yaml
pnpm-lock.yaml

```

The important lockfile is:

```text
pnpm-lock.yaml

```

The old npm lockfile:

```text
package-lock.json

```

was removed.

The project should not maintain both npm and pnpm lockfiles.

---

# 26. Initial Setup Summary

The initialization process can be summarized as:

```text
Node.js
   ↓
Corepack
   ↓
pnpm
   ↓
pnpm workspace
   ↓
root package.json
   ↓
pnpm-workspace.yaml
   ↓
packages/chess-engine
   ↓
TypeScript installed at workspace root
   ↓
chess-engine/tsconfig.json
   ↓
TypeScript-ready chess engine

```

Each layer has a different responsibility.

| PartResponsibility    |                                      |
| --------------------- | ------------------------------------ |
| Node.js               | JavaScript runtime                   |
| Corepack              | Helps manage package managers        |
| pnpm                  | Dependency and workspace management  |
| `package.json`        | Project/package metadata and scripts |
| `pnpm-workspace.yaml` | Defines workspace packages           |
| `pnpm-lock.yaml`      | Locks dependency versions            |
| TypeScript            | Type checking and compilation        |
| `tsconfig.json`       | TypeScript compiler configuration    |
| `src/`                | Source code                          |
| `dist/`               | Compiled output                      |

---

# 27. Current Project State

At the end of the initial setup, the project should look approximately like:

```text
chess-game/
├── docs/
│
├── packages/
│   └── chess-engine/
│       ├── src/
│       ├── package.json
│       └── tsconfig.json
│
├── node_modules/
├── package.json
├── pnpm-lock.yaml
└── pnpm-workspace.yaml

```

The important thing is that the **development environment is now established before the actual engine migration begins**.

---

# 28. What Comes Next?

The next task is **not more initialization**.

The foundation is now in place.

The next stage is the actual chess-engine migration:

```text
existing JavaScript chess logic
            ↓
understand existing responsibilities
            ↓
define engine architecture
            ↓
organize source files
            ↓
migrate code to TypeScript
            ↓
type-check
            ↓
test engine independently

```

The intended engine structure is approximately:

```text
packages/chess-engine/
└── src/
    ├── pieces/
    ├── board/
    ├── rules/
    ├── game/
    └── utils/

```

This structure is about **responsibility and domain boundaries**, not simply moving `.js` files into folders.

For example:

```text
pieces/
    pawn.ts
    knight.ts
    bishop.ts
    rook.ts
    queen.ts
    king.ts

```

should contain the fundamental behavior associated with those chess pieces.

Cross-cutting rules such as:

```text
promotion
en passant
check
checkmate
castling

```

should not automatically be placed inside the corresponding piece files.

The architecture will be developed from the existing working chess logic rather than from an unnecessarily complex theoretical design.

---

# 29. The Main Principle

The initialization phase follows one simple principle:

> **Set up the foundation once, then start building the actual system.**

Do not continuously change:

```text
package manager
folder structure
TypeScript configuration
build system
architecture

```

without a concrete reason.

Once the foundation is established, development should move forward into the actual chess engine.

That is the stopping point for project initialization.