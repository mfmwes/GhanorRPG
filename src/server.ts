import fastify from "fastify";
import { SpellsRoute } from "./routes/spells";
import cors from "@fastify/cors";

const app = fastify();

app.register(SpellsRoute);
app.register(cors, {
  origin: true,
});

app.listen({ host: "0.0.0.0", port: 3333 }, () =>
  console.log("server is running")
);
