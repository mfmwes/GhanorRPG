import fastify from "fastify";

const app = fastify();

app.listen({ port: 3333 }, () => {
  console.log("Servidor rodando na porta 3333");
});

