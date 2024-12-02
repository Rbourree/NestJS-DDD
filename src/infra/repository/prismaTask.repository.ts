import { PrismaClient } from '@prisma/client';
import { TaskRepository } from "../../domain//repositories/task.repository";
import { Task } from "../../domain/entities/task.entity";

// Here prisma call to database
export class PrismaTaskRepository implements TaskRepository {
    private prisma = new PrismaClient();

    async save(task: Task): Promise<Task> {
        const createdTask = await this.prisma.task.create({
            data: {
                title: task.getTitle(),
                description: task.getDescription()
            }
        })
        return new Task(
            createdTask.id_task,
            createdTask.title,
            createdTask.description,
            createdTask.completed,
        );
    }

    async findById(id_task: string): Promise<Task | null> {
        const task = await this.prisma.task.findUnique({ where: { id_task } });
        return task ? new Task(task.id_task, task.title, task.description, task.completed) : null;
    }

    async delete(id_task: string): Promise<void> {
        await this.prisma.task.delete({ where: { id_task } });
    }

    async findAll(): Promise<Task[]> {
        const tasks = await this.prisma.task.findMany();
        return tasks.map(
            (task) => new Task(task.id_task, task.title, task.description, task.completed),
        );
    }

}