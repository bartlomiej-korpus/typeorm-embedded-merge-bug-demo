import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Parent } from './parent';

export class Child {
  @Column()
  public name: string;

  @Column()
  public age: number;
}