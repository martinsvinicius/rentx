import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { hash } from 'bcrypt';

@Entity('users')
export class User {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  // @Column()
  // username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ name: 'driver_license' })
  driverLicense: string;

  @Column({ name: 'is_admin', default: false })
  isAdmin: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  constructor() {
    if (!this.id) this.id = uuid();
  }

  @BeforeInsert()
  async setUserData() {
    this.id = uuid();
    this.password = await this.encryptPassword(this.password);
  }

  @BeforeUpdate()
  async setUserPassword() {
    this.password = await this.encryptPassword(this.password);
  }

  private async encryptPassword(rawPassword: string) {
    return hash(rawPassword, 10);
  }
}
