This is BOMBOCLAT_Example.
all files in this directory are seen as examples so i can have a logic based format of what im doing.
ill be using the multilingual website that was made by my Holberton tutor, Ignacio, as the example repo.

# Elysia with Bun runtime

## Getting Started
To get started with this template, simply paste this command into your terminal:
```bash
bun create elysia ./elysia-example
```

## Development
To start the development server run:
```bash
bun run dev
```

Open http://localhost:3000/ with your browser to see the result.


# Import Statement
## in TypeScript:
Import statements are used to bring code("things")(like functions, classes, variables, or types) from one file or module to another.

- Named imports
  - named imports are used when a file contains multiple code you want to share
  - The Source File (mathUtils.ts):
  ```typescript
  export const add = (a: number, b: number) => a + b;
  export const subtract = (a: number, b: number) => a - b;
  ```
  -The Main File (app.ts):
  ```typescript
  import { add, subtract } from "./mathUtils";
  console.log(add(5, 3)); // 8
  ```

- Default imports
  - default imports are used when files have a single purpose

TypeScript allows for much liberty in organizing a code regarding import/export statement.

- Renaming Imports
  - `as` keyword is used to renaming an import
  ```typescript
  import { add as sum } from "./mathUtils";
  console.log(sum(10, 5));
  ```
  - used if you have 2 imports with the same name or if you want to rename an import

- Importing everything as an object
  - `* as` keyword is used.
  ```typescript
  import * as MathStuff from "./mathUtils";
  // Access them like object properties
  console.log(MathStuff.add(2, 2));
  console.log(MathStuff.subtract(5, 2));
  ```
  - difference from using Named imports where u name what "thing" you will use from a file, if a file has to many "things" and ud want to list them all, this where u use this keyword.


