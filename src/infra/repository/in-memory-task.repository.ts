import { PrismaClient } from '@prisma/client';
import { TaskRepository } from "src/domain/repositories/task.repository";
import { Task } from "src/domain/entities/task.entity";

// Here prisma call to database
export class PrismaTaskRepository implements TaskRepository {
    private prisma = new PrismaClient();

    async save(task: Task): Promise<void> {
        await this.prisma.task.create({
            data: {
                id: task.getId(),
                title: task.getTitle(),
                description: task.getDescription()
            }
        })
    }

    async findById(id: string): Promise<Task | null> {
        const task = await this.prisma.task.findUnique({ where: { id } });
        return task ? new Task(task.id, task.title, task.description, task.completed) : null;
    }

    async delete(id: string): Promise<void> {
        await this.prisma.task.delete({ where: { id } });
    }

    async findAll(): Promise<Task[]> {
        const tasks = await this.prisma.task.findMany();
        return tasks.map(
            (task) => new Task(task.id, task.title, task.description, task.completed),
        );
    }

}