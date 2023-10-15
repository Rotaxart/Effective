import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class History {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, nullable: false })
  event: string;

  @Column({ nullable: false })
  user_id: number;
}
