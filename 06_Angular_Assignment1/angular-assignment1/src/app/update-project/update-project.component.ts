import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      projectId: ['', Validators.min(1)],
      projectName: ['', Validators.required]
    });
  }

  onSubmit() {
    let project = this.addForm.value;
    let preEndDate = new Date(localStorage.getItem("preProjectEnd"));
    console.log("PreEndDate:" + preEndDate +", StartDate:"+new Date(project.startDate));

    if (project.startDate >= project.endDate) {
      alert("Start Date should not be same  or greater than End date");
      this.router.navigate(['updateProject']);
    } else if (preEndDate >= new Date(project.startDate)) {
      alert("Pre End Date should not be same  or less than Start date");
      this.router.navigate(['updateProject']);
    } else {
      localStorage.setItem("addProject", "add");
      localStorage.setItem("startDate", project.startDate);
      localStorage.setItem("endDate", project.endDate);
      localStorage.setItem("projectId", project.projectId);
      localStorage.setItem("projectName", project.projectName);
      this.router.navigate(['project']);
    }
  }

}
