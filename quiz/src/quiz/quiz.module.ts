import { Module } from '@nestjs/common';
import { QuizController } from './quiz/quiz.controller';

@Module({
  controllers: [QuizController]
})
export class QuizModule {}
