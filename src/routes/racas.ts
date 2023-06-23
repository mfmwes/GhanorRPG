import { FastifyInstance } from "fastify";
import racas from "../jsons/racas.json";
import { string, z } from "zod";

export const RacasRoute = async (app: FastifyInstance) => {
  app.get("/racas", async () => {
    return racas;
  });

  app.get("/racas/:name", async (request, reply) => {
    const paramsSchema = z.object({
      name: string(),
    });
    const { name } = paramsSchema.parse(request.params);
    const racaFound = racas.find(
      (raca) =>
        raca.nome === name ||
        raca.nome.toLowerCase() === name ||
        raca.nome.toUpperCase() === name ||
        raca.nome.split(/\s+/).join("-").toLowerCase() === name
    );

    if (!racaFound) {
      reply.status(404).send({
        message: "Raça não encontrada",
      });
    }

    return racaFound;
  });
};
