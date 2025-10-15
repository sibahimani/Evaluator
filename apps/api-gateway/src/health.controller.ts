import { Controller, Get } from "@nestjs/common";
import { DataSource } from "typeorm";

@Controller()
export class HealthController {
  constructor(private readonly ds: DataSource) {}

  @Get("health")
  health() {
    return {
      ok: true,
      service: "api-gateway",
      framework: "nest",
      ts: new Date().toISOString(),
    };
  }

  @Get("health/db")
  async healthDb() {
    try {
      // simple connectivity check; no table required
      await this.ds.query("SELECT 1");
      return { ok: true, db: "connected" };
    } catch (e: unknown) {
      return { ok: false, db: "error", message: e instanceof Error ? e.message : String(e) };
    }
  }
}
