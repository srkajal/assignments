import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Task } from '../model/task.model';
import { TaskRequest } from '../model/task-request.model';
import { ParentTask } from '../model/parent-task.model';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  constructor(private apiService: ApiService, private formBuilder: FormBuilder, private router: Router) { }

  editForm: FormGroup;
  defaultPrirority: number = 15;
  editTask: Task;
  taksRequest: TaskRequest = new TaskRequest();
  parentTaskList: Array<ParentTask> = [];
  submitted = false;

  ngOnInit() {
    let editTaskId = localStorage.getItem("editTaskId");

    if (!editTaskId) {
      alert("Invalid action.")
      this.router.navigate(['tasks']);
      return;
    }

    this.getParentTaskList();

    this.apiService.getTaskById(Number(editTaskId)).subscribe((data: any) => {
      this.editTask = data.task;
      //console.log("TaskId:"+editTaskId+", "+ this.editTask.parent_task.parent_id);
      this.taksRequest.task_id = this.editTask.task_id;
      this.taksRequest.task_name = this.editTask.task_name;
      this.taksRequest.start_date = this.editTask.start_date.toString();
      this.taksRequest.end_date = this.editTask.end_date.toString();
      this.taksRequest.parent_id = this.editTask.parent_task.parent_id;
      this.taksRequest.priority = this.editTask.priority;

      this.editForm.setValue(this.taksRequest);
    });


    this.editForm = this.formBuilder.group({
      task_name: ['', Validators.required],
      priority: ['', Validators.min(1)],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      parent_id: ['', Validators.min(1)],
      task_id: ['', Validators.min(1)]
    });
  }

  // convenience getter for easy access to form fields
  get formField() { return this.editForm.controls; }

  onSubmit() {
    this.submitted = true;
    //console.log("parent_id:" + this.addForm.value.parent_id);

    if (this.editForm.value.priority == "") {
      this.editForm.value.priority = this.defaultPrirority;
    }

    if (this.editForm.value.parent_id == "") {
      return;
    }

    // stop here if form is invalid
    if (this.editForm.invalid) {
      return;
    }
    //console.log("TaskId:"+(Number(this.addForm.value.task_id) >0));
    this.apiService.updateTask(this.editForm.value).subscribe(response => this.router.navigate(['tasks']));
  }

  cancel(){
    this.router.navigate(['tasks']);
  }

  getParentTaskList() {
    this.apiService.getAllParentTasks().subscribe((data: any) => {
      this.parentTaskList = data.parent_tasks;
    });
  }

}
