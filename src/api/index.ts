import { treaty } from "@elysiajs/eden";
import { swagger } from "@elysiajs/swagger";
import Elysia, { t } from "elysia";

export const app = new Elysia({ prefix: "/api" })
  .use(swagger())
  .get(
    "/hello",
    () => ({ message: "Hello, World!" }),
    {
      response: t.Object({
        message: t.String()
      })
    }
  );

export const eden = treaty(app);
