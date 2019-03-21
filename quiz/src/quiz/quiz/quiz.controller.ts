import { Controller, Get } from '@nestjs/common';

@Controller('quiz')
export class QuizController {
  @Get()
  getQuiz() {
    return { title: 'Frage', answer1: 'a', answer2: 'b', correct: 2 };
  }
}
