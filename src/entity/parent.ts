import { Entity, PrimaryGeneratedColumn, OneToMany, Column } from 'typeorm';
import { Child } from './child';

@Entity()
export class Parent {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column(type => Child)
  public child: Child;
}