import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { HealthController } from "./health.controller";
import { Health } from "./entities/Health";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: [".env.local", ".env"] }),
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        const url = process.env.DATABASE_URL!;
        return {
          type: "postgres",
          url,
          entities: [Health],
          synchronize: false, // we’ll manage schema with SQL/migrations
        };
      },
    }),
    TypeOrmModule.forFeature([Health]),
  ],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
