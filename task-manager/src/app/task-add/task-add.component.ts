import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Task } from '../model/task.model';
import { TaskRequest } from '../model/task-request.model';
import { ParentTask } from '../model/parent-task.model';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  constructor(private apiService: ApiService, private formBuilder: FormBuilder, private router: Router) { }

  addForm: FormGroup;
  defaultPrirority: number = 15;
  editTask: Task;
  parentTaskList: Array<ParentTask> = [];
  taksRequest: TaskRequest = new TaskRequest();
  submitted = false;

  ngOnInit() {
    this.getParentTaskList();

    this.addForm = this.formBuilder.group({
      task_name: ['', Validators.required],
      priority: ['', Validators.min(1)],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      parent_id: ['', Validators.min(1)]
    });
  }

  // convenience getter for easy access to form fields
  get formField() { return this.addForm.controls; }

  onSubmit() {
    this.submitted = true;
    //console.log("parent_id:" + this.addForm.value.parent_id);

    if (this.addForm.value.priority == "") {
      this.addForm.value.priority = this.defaultPrirority;
    }

    if (this.addForm.value.parent_id == "") {
      return;
    }

    // stop here if form is invalid
    if (this.addForm.invalid) {
      return;
    }
    this.apiService.addTask(this.addForm.value).subscribe(response => this.router.navigate(['tasks']));
  }

  resetTask() {
    this.addForm.reset();
  }

  getParentTaskList() {
    this.apiService.getAllParentTasks().subscribe((data: any) => {
      this.parentTaskList = data.parent_tasks;
    });
  }
}
