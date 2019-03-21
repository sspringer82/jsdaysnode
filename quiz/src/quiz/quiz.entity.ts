import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Quiz {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  title: string;

  @Column('text')
  answer1: string;

  @Column('text')
  answer2: string;

  @Column('int')
  correct: number;
}
