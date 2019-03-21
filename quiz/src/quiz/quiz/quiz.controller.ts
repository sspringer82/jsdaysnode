import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Quiz } from '../quiz.interface';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get(':id')
  getQuiz(@Param('id') id: string): Promise<Quiz> {
    return this.quizService.getQuiz(parseInt(id, 10));
  }

  @Post('solve/:id')
  solveQuiz(
    @Body() body: { answer: number },
    @Param('id') id: string,
  ): boolean {
    return this.quizService.solve(body, parseInt(id, 10));
  }
}
