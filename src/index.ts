import { Hono } from "hono";
import { poweredBy } from "hono/powered-by";

declare const LINK_KV: KVNamespace;

const app = new Hono();

app.use("*", poweredBy());

app.get("/", (c) => c.redirect("https://su8ru.dev", 307));

app.get("/:key", async (c) => {
  const key = c.req.param("key");
  const value = await LINK_KV.get(key);
  if (value) return c.redirect(value, 307);
  return c.notFound();
});

app.fire();
