import { Module } from '@nestjs/common';
import { TaskController } from "../interfaces/controller/task.controller";

@Module({
  imports: [],
  controllers: [TaskController],
  providers: [],
})
export class AppModule {}
