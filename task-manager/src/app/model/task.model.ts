import { ParentTask } from './parent-task.model';

export class Task {
    task_id: number;
    task: String;
    priority: number;
    start_date: Date;
    end_date: Date;
    parent_task: ParentTask;

    constructor(task_id: number, task: String, priority: number, start_date: Date, end_date: Date, parent_task: ParentTask){
        this.task_id = task_id;
        this.task = task;
        this.priority = priority;
        this.start_date = start_date;
        this.end_date = end_date;
        this.parent_task = parent_task;
    }
}
