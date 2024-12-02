import { TaskRepository } from "src/domain/repositories/task.repository";
import { Task } from "src/domain/entities/task.entity";

// Here prisma call to database
export class InMemoryTaskRepository implements TaskRepository {
    private tasks: Map<string, Task> = new Map();

    async save(task: Task): Promise<void> {
        this.tasks.set(task.getId(), task);
    }

    async findById(id: string): Promise<Task | null> {
        return this.tasks.get(id) || null;
    }

    async delete(id: string): Promise<void> {
        this.tasks.delete(id);
    }

    async findAll(): Promise<Task[]> {
        return Array.from(this.tasks.values());
    }

}