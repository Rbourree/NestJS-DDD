import { Controller, Post, Body, Get, Param, Delete } from "@nestjs/common";
import { CreateTaskUseCase } from "../../application/use-cases/create-task.use-case";
import { PrismaTaskRepository } from "src/infra/repository/prismaTask.repository";
import { TaskService } from "src/domain/service/task.service";
import { CreateTaskDto } from "../dtos/input/createTask.dto";
import { TaskResponseDto } from "../dtos/output/taskResponse";

@Controller('tasks')
export class TaskController {

    private readonly taskRepository = new PrismaTaskRepository();
    private readonly taskService = new TaskService();
    private readonly createTaskUseCase = new CreateTaskUseCase(this.taskRepository, this.taskService);

    @Post()
    async createTask(@Body() body: CreateTaskDto): Promise<TaskResponseDto> {
        return await this.createTaskUseCase.createTask(body);
    }

    @Get(':id')
    async getTask(@Param('id') id: string) {
        const task = await this.taskRepository.findById(id);
        return task || { error: 'Task not found' };
    }

    @Get()
    async getAllTasks() {
        return await this.taskRepository.findAll();
    }

    @Delete(':id')
    async deleteTask(@Param('id') id: string) {
        await this.taskRepository.delete(id);
    }
}