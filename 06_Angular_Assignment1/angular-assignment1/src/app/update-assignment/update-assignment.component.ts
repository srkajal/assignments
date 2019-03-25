import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-assignment.component.html',
  styleUrls: ['./update-assignment.component.css']
})
export class UpdateAssignmentComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      customerId: ['', Validators.min(1)],
      customerName: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      location: ['', Validators.required]
    });
  }


  onSubmit() {
    let assignment = this.addForm.value;
    let preEndDate = new Date(localStorage.getItem("preAssEnd"));
    console.log("PreAssEnd:" + preEndDate +", StartDate:"+new Date(assignment.startDate));

    if (assignment.startDate >= assignment.endDate) {
      alert("Start Date should not be same  or greater than End date");
      this.router.navigate(['updateAssignment']);
    } else if (preEndDate >= new Date(assignment.startDate)) {
      alert("Pre End Date should not be same  or less than Start date");
      this.router.navigate(['updateAssignment']);
    } else {
      localStorage.setItem("addAssignment", "add");
      localStorage.setItem("startDate", assignment.startDate);
      localStorage.setItem("endDate", assignment.endDate);
      localStorage.setItem("customerId", assignment.customerId);
      localStorage.setItem("customerName", assignment.customerName);
      localStorage.setItem("location", assignment.location);
      this.router.navigate(['project']);
    }
  }

}
