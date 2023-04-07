import { config } from "dotenv";
config();

import fastify from "fastify";

const app = fastify();

console.log("Hi");

app.listen({
  port: parseInt(process.env.PORT!),
});
