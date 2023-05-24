import fastify from "fastify";
import { SpellsRoute } from "./routes/spells";

const app = fastify();

app.register(SpellsRoute)

app.listen({ port: 3333 }, () => {
  console.log("Servidor rodando na porta 3333");
});

