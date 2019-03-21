import { Injectable } from '@nestjs/common';
import { Quiz } from '../quiz.interface';

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

  getQuiz(id: number): Quiz {
    const quiz = this.quiz.find(q => q.id === id);
    delete quiz.correct;
    return quiz;
  }

  solve(body: { answer: number }, id: number): boolean {
    const quiz = this.quiz.find(q => q.id === id);
    if (body.answer === quiz.correct) {
      return true;
    }
    return false;
  }
}
