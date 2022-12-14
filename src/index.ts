import { Hono } from "hono";
import { poweredBy } from "hono/powered-by";
import about from "./about";

declare const LINK_KV: KVNamespace;

const app = new Hono();

app.use("*", poweredBy());

app.get("/", (c) => c.redirect("https://su8ru.dev", 307));

app.get("/about", (c) => c.text(about));

app.get("/:key", async (c) => {
  const key = c.req.param("key");
  const value = await LINK_KV.get(key);
  if (!value) return c.notFound();
  const query = c.req.query();
  const params = new URLSearchParams(query).toString();
  const redirectUrl = params ? `${value}?${params}` : value;
  return c.redirect(redirectUrl, 307);
});

app.fire();
