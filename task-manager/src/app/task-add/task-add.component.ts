import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Task } from '../model/task.model';
import { TaskRequest } from '../model/task-request.model';

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
  taksRequest: TaskRequest = new TaskRequest();

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      task_name: ['', Validators.required],
      priority: ['', Validators.min(1)],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      parent_id: ['', Validators.min(1)]
    });
  }

  onSubmit() {
    //console.log("Prirority:"+this.addForm.value.priority);

    if (this.addForm.value.priority == "") {
      this.addForm.value.priority = this.defaultPrirority;
    }
    this.apiService.addTask(this.addForm.value).subscribe(response => this.router.navigate(['tasks']));
  }

  resetTask(){
    this.addForm.reset();
  }
}
