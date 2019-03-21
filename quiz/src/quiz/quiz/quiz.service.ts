import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from '../quiz.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuizService {
  private quiz: Quiz[] = [
    {
      id: 1,
      title: 'Wieviel ist 1 + 1',
      answer1: '1',
      answer2: '2',
      correct: 2,
    },
  ];
  constructor(
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>,
  ) {}

  getQuiz(id: number): Promise<Quiz> {
    return this.quizRepository.findOne(id);
    // const quiz = this.quiz.find(q => q.id === id);
    // delete quiz.correct;
    // return quiz;
  }

  solve(body: { answer: number }, id: number): boolean {
    const quiz = this.quiz.find(q => q.id === id);
    if (body.answer === quiz.correct) {
      return true;
    }
    return false;
  }
}
