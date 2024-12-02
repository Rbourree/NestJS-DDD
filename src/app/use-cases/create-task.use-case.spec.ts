import { InMemoryTaskRepository } from '../../infra/repository/in-memory-task.repository';
import { TaskService } from '../../domain/service/task.service';
import { CreateTaskUseCase } from './create-task.use-case';

describe('CreateTaskUseCase', () => {
  it('should create and save a task', async () => {
    const taskRepository = new InMemoryTaskRepository();
    const taskService = new TaskService();
    const useCase = new CreateTaskUseCase(taskRepository, taskService);

    await useCase.createTask('1', 'Test Task', 'This is a test task');

    const task = await taskRepository.findById('1');
    expect(task).not.toBeNull();
    expect(task?.getTitle()).toBe('Test Task');
  });
});