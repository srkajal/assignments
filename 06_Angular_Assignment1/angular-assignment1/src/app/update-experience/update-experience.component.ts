import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-experience',
  templateUrl: './update-experience.component.html',
  styleUrls: ['./update-experience.component.css']
})
export class UpdateExperienceComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      hireDate: ['', Validators.required],
      endDate: ['', Validators.required],
      employeer: ['', Validators.required]
    });
  }

  onSubmit() {
    let experience = this.addForm.value;
    let preHireDate = new Date(localStorage.getItem("preExpHire"));
    console.log("PreHireDate:" + preHireDate +", EndDate:"+new Date(experience.endDate));

    if (experience.hireDate >= experience.endDate) {
      alert("Hier Date should not be same  or greater than End date");
      this.router.navigate(['updateExperience']);
    } else if (preHireDate <= new Date(experience.endDate)) {
      alert("Pre Hier Date should not be same  or less than End date");
      this.router.navigate(['updateExperience']);
    } else {
      localStorage.setItem("addExperience", "add");
      localStorage.setItem("hireDate", experience.hireDate);
      localStorage.setItem("endDate", experience.endDate);
      localStorage.setItem("employeer", experience.employeer);
      this.router.navigate(['experience']);
    }
  }
}
