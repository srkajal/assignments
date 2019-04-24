import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  private taskList: Array<Task> = [];
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks(){
    this.apiService.getAllTasks().subscribe((data: any)=>
    {
      this.taskList = data.tasks;
      //console.log(data);
    });
  }

  endTask(taskId: number){
    console.log("Task Id:"+taskId);
    this.apiService.endTask(taskId).subscribe((data: any)=>{this.taskList = this.taskList.filter((a: Task)=>a.task_id!=taskId)});
  }

  editTask(taskId: number){
    
    console.log("TaskId:"+taskId);
    localStorage.removeItem("editTaskId");
    localStorage.setItem("editTaskId", taskId.toString());
    
    this.router.navigate(['add-task']);
  }
}
