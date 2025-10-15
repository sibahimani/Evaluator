import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "health_probe" })
export class Health {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "timestamptz", default: () => "now()" })
  created_at!: Date;
}
