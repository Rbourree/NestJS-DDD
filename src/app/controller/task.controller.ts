import { Controller, Post, Body, Get, Param, Delete } from "@nestjs/common";
import { CreateTaskUseCase } from "../use-cases/create-task.use-case";
import { InMemoryTaskRepository } from "src/infra/repository/in-memory-task.repository";
import { TaskService } from "src/domain/service/task.service";


@Controller('tasks')
export class TaskController {

    private readonly taskRepository = new InMemoryTaskRepository();
    private readonly taskService = new TaskService();
    private readonly createTaskUseCase = new CreateTaskUseCase(this.taskRepository, this.taskService);

    @Post()
    async createTask(@Body() body: any) {
        return await this.createTaskUseCase.createTask(body);
    }

    @Get(':id')
    async getTask(@Param('id') id: string) {
        const task = await this.taskRepository.findById(id);
        return task || { error: 'Task not found' };
    }

    @Delete(':id')
    async deleteTask(@Param('id') id: string) {
        await this.taskRepository.delete(id);
    }
}