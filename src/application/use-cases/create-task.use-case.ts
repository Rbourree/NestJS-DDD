import { Task } from 'src/domain/entities/task.entity';
import { TaskRepository } from '../../domain/repositories/task.repository';
import { TaskService } from '../../domain/service/task.service';
import { CreateTaskDto } from '../dtos/createTask.dto'
export class CreateTaskUseCase {
  constructor(
    private readonly taskRepository: TaskRepository,
    private readonly taskService: TaskService,
  ) {}

  async createTask(data: CreateTaskDto): Promise<Task> {
    const task = this.taskService.createTask(data.title, data.description);
    return await this.taskRepository.save(task);
  }
}