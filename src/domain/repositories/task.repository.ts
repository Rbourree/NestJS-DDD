import { Task } from "../entities/task.entity";

export interface TaskRepository {
    save(task: Task): Promise<void>;
    findById(id: string): Promise<Task | null>;
    delete(id: string): Promise<void>;
    findAll(): Promise<Task[]>;
}