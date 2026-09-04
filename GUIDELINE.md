# Code Guidelines

This document defines coding conventions used throughout the project.

The goal is to keep the code:

- Clear and consistent
- Easy to understand and maintain
- Friendly to beginners and experienced developers
- Easy for AI agents to parse, understand, and generate

---

## 1. Commenting

### 1.1 TypeScript File Headers

Every TypeScript source file (`.ts`, `.tsx`, excluding `*.test.ts`, `*.spec.ts`, and `.d.ts`) must begin with a standardized header comment placed before all imports or other code.

#### Standard Format

```ts
/**
 * Purpose:
 * Briefly explains what this file is responsible for.
 *
 * Related:
 * - ./related-file.ts
 * - ../path/to/another-file.ts
 */
```

#### Fields

##### `Purpose` (Required)

- **What it answers:** What is this file responsible for?
- **Requirements:**
  - Must state the responsibility, not the implementation details.
  - Must be concise (1–3 sentences).
  - Do not repeat the filename.
  - Keep the description accurate whenever the file is modified.

**Good:**

```ts
/**
 * Purpose:
 * Represents the current state of a chess game.
 * Stores the board layout, players, and current turn status.
 */
```

**Avoid:**

```ts
/**
 * Purpose:
 * This file contains several classes and functions that
 * are responsible for handling different things related
 * to the game and was created as part of the architecture...
 */
```

##### `Related` (Optional)

- Include when direct, high-context relationships with other files help clarify this file's responsibility.
- Use relative file paths (e.g., `./board.ts` or `../types/game.ts`) rather than bare names to prevent ambiguity across directories.
- Do not list every file that imports or indirectly interacts with this file.
- Omit the `Related:` block entirely when there are no meaningful direct relationships.

**Example:**

```ts
/**
 * Related:
 * - ./board.ts
 * - ./move-validator.ts
 * - ../types/game-state.ts
 */
```

### Header Rules

1. **Placement:** The header must be the first block in the file, placed before any imports, types, or code.
2. **Scope:** Keep it short; it is a high-level introduction, not full API documentation.
3. **Language:** Use simple, direct, declarative language.
4. **Content Focus:** Describe _what_ the file is responsible for, never _how_ it works internally.
5. **No Noise:** Do not include author tags, creation dates, TODOs, temporary notes, or changelogs.
6. **Minimal for Simple Files:** Single-purpose utility files should use a minimal 1-sentence `Purpose` header.

### Checklist for Agents and Developers

Before committing or generating code in a `.ts` or `.tsx` file:

- [ ] Placement: Is the JSDoc header placed before all imports, types, or code?
- [ ] Purpose: Is `Purpose:` present, concise (1–3 sentences), and focused on responsibility rather than implementation?
- [ ] Related: Are relative paths used if `Related:` is included, or omitted entirely if not needed?
- [ ] Cleanliness: Are author names, timestamps, TODOs, and changelogs excluded?
- [ ] Accuracy: Does the header reflect the current state of the file after the latest change?

> **Core Rule:** The header explains what the file is responsible for. The code explains how it works.
