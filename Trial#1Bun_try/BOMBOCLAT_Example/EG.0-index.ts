// Imports the Elysia class from the official 'elysia' npm package.
// Elysia is a fast, TypeScript-first web framework built specifically for the Bun runtime.
import { Elysia } from "elysia";

// new Elysia(): Instantiates a new server application instance.
// .get("/", () => ...): Registers an HTTP GET route handler for the root path ("/").
// .listen(3000): Binds the application to port 3000 and starts listening for HTTP requests.
const app = new Elysia()
    .get("/", () => "WAGWAN ME BOMBOCLAT USERS")
    .listen(3000);

// Logs a success message utilizing the active server instance details.
console.log(
    `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);