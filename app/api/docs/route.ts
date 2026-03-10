import swaggerSpec from "@/swagger/swagger.json";

export async function GET() {
  return Response.json(swaggerSpec);
}