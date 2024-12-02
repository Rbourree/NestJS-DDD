import { Task } from "../entities/task.entity";

export class TaskService {
    createTask(id: string, title: string, description: string): Task {
        return new Task(id, title, description);
    }


    toggleTaskStatus(task: Task):void {
        task.isCompleted() ? task.reopenTask() : task.completeTask();
    }
}