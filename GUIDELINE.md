# Code Guidelines

This document defines coding conventions used throughout the project.

The goal is to keep the code:

- Clear and consistent
- Easy to understand and maintain
- Friendly to beginners and experienced developers
- Easy for AI agents to understand

---

# 1. Commenting

## 1.1 TypeScript File Headers

Every `.ts` file should begin with a short header comment describing the file's responsibility.

### Standard Format

```ts
/**
 * Purpose:
 * Briefly explains what this file is responsible for.
 *
 * Related:
 * - related-file.ts
 * - another-file.ts
 */
```

#### Purpose

1. `Purpose` is required.
2. It should answer:
   > What is this file responsible for?

Good:

```ts
/**
 * Purpose:
 * Represents the current state of a chess game.
 * Stores the board, players, and current turn.
 */
```

Avoid:

```ts
/**
 * Purpose:
 * This file contains several classes and functions that
 * are responsible for handling different things related
 * to the game and was created as part of the architecture...
 */
```

#### Related

- `Related` is optional.
- Include it when important direct relationships with other files help explain the file's role.
- Do not list every file that depends on or indirectly interacts with the file.
- Omit `Related` when there are no meaningful relationships.

Example:

```ts
/**
 * Related:
 * - board.ts
 * - move.ts
 * - game-state.ts
 */
```

### Header Rules

- The header must appear before imports or other code.
- Keep it short; it is an introduction, not full documentation.
- Use simple, direct language.
- Describe what the file is responsible for, not how it works.
- Do not repeat the filename.
- Keep the description accurate as the file changes.
- Do not put TODOs, temporary notes, or personal reminders in the header.
- Simple files should use a minimal header.

### Checklist

When creating or modifying a .ts file:

- [ ] Does the file begin with a header?
- [ ] Is `Purpose` present and clear?
- [ ] Is the language simple and direct?
- [ ] Is `Related` included when useful?
- [ ] Does the header describe responsibility rather than implementation?
- [ ] Is the header still accurate after the change?

> Core rule: The header explains what the file is responsible for. The code explains how it works.
