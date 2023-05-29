import { FastifyInstance } from "fastify";
import spells from "../jsons/spells.json";
import { string, z } from "zod";

export const SpellsRoute = async (app: FastifyInstance) => {
  app.get("/spells", async () => {
    return spells;
  });

  app.get("/spells/:name", async (request, reply) => {
    const paramsSchema = z.object({
      name: string(),
    });
    const { name } = paramsSchema.parse(request.params);

    const spellFound = spells.find(
      (spell) =>
        spell.name === name ||
        spell.name.toLowerCase() === name ||
        spell.name.toUpperCase() === name ||
        spell.name.split(/\s+/).join("-").toLowerCase() === name
    );
    if (!spellFound) {
      reply.status(404).send({
        message: "Magia não encontrada",
      });
    }
    return spellFound;
  });
};
