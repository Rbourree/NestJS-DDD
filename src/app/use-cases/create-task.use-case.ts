import { TaskRepository } from '../../domain/repositories/task.repository';
import { TaskService } from '../../domain/service/task.service';

export class CreateTaskUseCase {
  constructor(
    private readonly taskRepository: TaskRepository,
    private readonly taskService: TaskService,
  ) {}

  async createTask(id: string, title: string, description: string): Promise<void> {
    const task = this.taskService.createTask(id, title, description);
    await this.taskRepository.save(task);
  }
}