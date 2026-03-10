import swaggerJsdoc from "swagger-jsdoc";
import path from "path";

import "@/swagger/admin.swagger";
import "@/swagger/auth.swagger";
import "@/swagger/email.swagger";
import "@/swagger/forum.swagger";
import "@/swagger/home.swagger";
import "@/swagger/movies.swagger";
import "@/swagger/password.swagger";
import "@/swagger/payment.swagger";
import "@/swagger/profile.swagger";
import "@/swagger/screenings.swagger";
import "@/swagger/ticket.swagger";

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

  apis: [path.join(process.cwd(), "swagger/**/*.ts")],
};

export const swaggerSpec = swaggerJsdoc(options);