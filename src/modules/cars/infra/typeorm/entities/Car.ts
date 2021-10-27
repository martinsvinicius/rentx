import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { Category } from './Category';
import { v4 as uuid } from 'uuid';

@Entity('cars')
export class Car {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ name: 'daily_rate' })
  dailyRate: number;

  @Column()
  available: boolean = true;

  @Column({ name: 'license_plate' })
  licensePlate: string;

  @Column({ name: 'fine_amount' })
  fineAmount: number;

  @Column()
  brand: string;

  @ManyToOne(() => Category, (category) => category.cars)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
