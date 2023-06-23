import fastify from "fastify";
import { SpellsRoute } from "./routes/spells";
import cors from "@fastify/cors";
import "dotenv/config";
import { RacasRoute } from "./routes/racas";

const app = fastify();

app.register(SpellsRoute);
app.register(RacasRoute);
app.register(cors, {
  origin: true,
});

app.listen(
  { host: "0.0.0.0", port: process.env.PORT ? Number(process.env.PORT) : 3333 },
  () => {
    console.log("server is running");
  }
);
