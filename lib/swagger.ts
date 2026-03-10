import swaggerJsdoc from "swagger-jsdoc";

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
        url: process.env.NEXT_PUBLIC_URL || "http://localhost:3000",
      },
    ],
  },

  apis: ["./swagger/**/*.ts"],
};

export const swaggerSpec = swaggerJsdoc(options);