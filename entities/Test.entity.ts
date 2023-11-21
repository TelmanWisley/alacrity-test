import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "test" })
export class TestEntity {
  @PrimaryColumn({ name: "id"})
  id: string;

  @Column({ name: "content"})
  content: string;

  @Column({ name: "iv" })
  iv: string;
}
