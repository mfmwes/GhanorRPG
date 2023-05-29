import fastify from "fastify";
import { SpellsRoute } from "./routes/spells";
import cors from "@fastify/cors";

const app = fastify();

app.register(SpellsRoute);
app.register(cors, {
  origin: true,
});

app.listen({ host: "0.0.0.0" }, () => {
  console.log("Servidor rodando na porta 3333");
});
