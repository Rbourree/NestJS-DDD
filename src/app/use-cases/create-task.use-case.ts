import { TaskRepository } from '../../domain/repositories/task.repository';
import { TaskService } from '../../domain/service/task.service';
import { TaskDto } from '../dto/task.dto';

export class CreateTaskUseCase {
  constructor(
    private readonly taskRepository: TaskRepository,
    private readonly taskService: TaskService,
  ) {}

  async createTask(data: TaskDto): Promise<void> {
    const task = this.taskService.createTask(data.title, data.description);
    await this.taskRepository.save(task);
  }
}