import { PrismaTaskRepository } from '../../infra/repository/prismaTask.repository';
import { TaskService } from '../../domain/service/task.service';
import { CreateTaskUseCase } from './create-task.use-case';

describe('CreateTaskUseCase', () => {
  it('should create and save a task', async () => {
    const taskRepository = new PrismaTaskRepository();
    const taskService = new TaskService();
    const useCase = new CreateTaskUseCase(taskRepository, taskService);

    await useCase.createTask({ title: 'Test Task', description: 'This is a test task' });

    const task = await taskRepository.findById('4def367f-2ba0-4d09-8202-14a3132d327b');
    expect(task).not.toBeNull();
    expect(task?.getTitle()).toBe('Test Task');
  });
});