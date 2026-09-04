# Development Workflow

The development workflow outlines the step-by-step process for creating branches, writing code, committing changes, and opening pull requests.

## 1. Git Branches

Branch names define the scope and type of work being performed in an isolated environment.

**Format:**  
`<type>/<short-description>`

### Branch Types

| Type       | Purpose                                        | Example                      |
| :--------- | :--------------------------------------------- | :--------------------------- |
| `feat`     | New features or enhancements                   | `feat/pawn-promotion`        |
| `fix`      | Bug fixes or unintended behavior               | `fix/knight-move-validation` |
| `refactor` | Code reorganization without functional changes | `refactor/board-state-store` |
| `docs`     | Documentation and comment updates              | `docs/contributing-guide`    |

### Branch Naming Rules

- **Casing:** Use all lowercase letters.
- **Separators:** Use hyphens (`-`) between words (kebab-case). Never use spaces, underscores, or camelCase.
- **Brevity:** Keep descriptions short, specific, and bounded to 2–4 words.
- **Punctuation:** Never include special characters (`.`, `:`, `~`, `^`, `?`, `*`, `[`).
- **Issue IDs (If applicable):** If working against a ticket, prefix the description with the ticket ID (e.g., `feat/GH-42-pawn-promotion` or `fix/102-knight-bounds`).

### Examples

**Good:**

- `feat/player-timer`
- `fix/castling-rights`
- `refactor/turn-manager`
- `docs/setup-instructions`

**Avoid:**

- `feat/addPlayerTimer` (Avoid camelCase)
- `fix/knight_bounds_bug` (Avoid underscores)
- `my-new-feature` (Missing type prefix)
- `fix/fixing-the-broken-game-over-state-after-checkmate` (Too verbose)

## 2. Commit Messages

Commit messages provide a short, structured summary explaining what changes were made in a code revision and why they were made.

**Format:**
`<emoji> <type>: <short description>`

### Commit Types

| Emoji | Type       | Name          | Purpose                                                                 |
| :---- | :--------- | :------------ | :---------------------------------------------------------------------- |
| ✨    | `feat`     | Feature       | Adds new functionality or capability.                                   |
| 🐛    | `fix`      | Fix           | Corrects a bug or incorrect behavior.                                   |
| ♻️    | `refactor` | Refactor      | Restructures existing code without intentionally changing its behavior. |
| 📝    | `docs`     | Documentation | Adds, removes, or updates documentation.                                |

### Commit Description Rules

- **Length:** Keep the entire subject line under 72 characters.
- **Mood:** Use the imperative mood (e.g., `add`, `update`, `remove`—never `added`, `updates`, or `adding`).
- **Casing:** Start the description with a lowercase letter.
- **Punctuation:** Do not end the description with a period.
- **Focus:** State _what_ the commit does, not the work narrative or dev process.

### Examples

**Good:**

1. `✨ feat: add pawn movement validation`
2. `🐛 fix: prevent invalid knight moves across board edges`
3. `♻️ refactor: decouple board layout from turn state`
4. `📝 docs: update developer setup guide`

**Avoid:**

1. `✨ feat: made some changes to pawn code (Vague, past tense)`
2. `✨ feat: I worked on the pawn movement functionality and made several changes (Narrative, too long)`
3. `🐛 fix: Fixes broken logic. (Capitalized, ends with period, not specific)`

### Choosing a Type

Base the commit type on what the change primarily accomplishes, not on the modified file types alone:

- Editing `architecture.md` → `📝 docs`
- Fixing an off-by-one error in logic → `🐛 fix`
- Renaming utility functions across modules → `♻️ refactor`

> **Note:** If a change covers multiple types of work, split the changes into smaller, atomic commits whenever practical. Otherwise, label the commit using its primary intent.
