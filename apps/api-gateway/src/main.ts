import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module"; // <-- note the leading "./"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(Number(process.env.PORT || 4000));
  console.log("api-gateway (NestJS) listening on http://localhost:4000");
}
bootstrap();
