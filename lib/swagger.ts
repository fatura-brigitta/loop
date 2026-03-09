import swaggerJsdoc from "swagger-jsdoc";
import path from "path";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Loop API",
      version: "1.0.0",
      description: "Loop mozi backend API dokumentáció",
    },
    servers: [
      {
        url: "https://loop-sooty.vercel.app",
      },
    ],
  },
  apis: [path.join(process.cwd(), "swagger/**/*.ts")],
};

export const swaggerSpec = swaggerJsdoc(options);
