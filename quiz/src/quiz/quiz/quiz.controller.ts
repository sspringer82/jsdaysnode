import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('quiz')
export class QuizController {
  private quiz = [
    {
      id: 1,
      title: 'Wieviel ist 1 + 1',
      answer1: '1',
      answer2: '2',
      correct: 2,
    },
  ];

  @Get(':id')
  getQuiz(@Param() param) {
    const quiz = this.quiz.find(q => q.id === parseInt(param.id, 10));
    delete quiz.correct;
    return quiz;
  }

  @Post('solve/:id')
  solveQuiz(@Body() body: { answer: number }, @Param() param) {
    const quiz = this.quiz.find(q => q.id === parseInt(param.id, 10));
    if (body.answer === quiz.correct) {
      return true;
    }
    return false;
  }
}
