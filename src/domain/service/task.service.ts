import { Task } from "../entities/task.entity";

export class TaskService {
    createTask(title: string, description: string): Task {
        return new Task(null, title, description);
    }


    toggleTaskStatus(task: Task):void {
        task.isCompleted() ? task.reopenTask() : task.completeTask();
    }
}