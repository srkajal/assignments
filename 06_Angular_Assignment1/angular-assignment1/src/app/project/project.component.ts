import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../model/Project.model';
import { Assignment } from '../model/Assignment.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects: Project[];
  assignments: Assignment[];

  constructor(private router: Router) { 
    this.projects =  [new Project(12, "AWS", new Date("02-03-2015"), new Date("02-03-2017"))];
    this.assignments = [new Assignment(1235, "ABD", new Date("02-03-2016"), new Date("02-03-2017"), "Bangalore")];

  }

  ngOnInit() {
    this.getStorageData();
  }

  addAssignment(){
    localStorage.clear();
    localStorage.setItem("preAssEnd", this.assignments[this.assignments.length-1].endDate.toString());
    this.router.navigate(['updateAssignment']);
  }

  removeAssignment() {
    if (this.assignments.length == 1) {
      alert("Atleast one assignment required");
    } else {
      this.assignments.pop();
      localStorage.clear();
    }

    this.router.navigate(['project']);
  }

  addProject(){
    localStorage.clear();
    localStorage.setItem("preProjectEnd", this.projects[this.projects.length-1].endDate.toString());
    this.router.navigate(['updateProject']);
  }

  removeProject() {
    if (this.projects.length == 1) {
      alert("Atleast one project required");
    } else {
      this.projects.pop();
      localStorage.clear();
    }

    this.router.navigate(['project']);
  }

  getStorageData() {
    let addAss = localStorage.getItem("addAssignment");
    let addPro = localStorage.getItem("addProject");

    if (addAss) {

      console.log("AddAss:" + addAss);
      this.assignments.push(this.generateAssElement());

    } else if(addPro){
      console.log("AddPro:" + addPro);
      this.projects.push(this.generateProjElement());
    }
    else {
      console.log("No data in localStorage");
    }
  }

  generateAssElement() {
    let startDate = localStorage.getItem("startDate");
    let endDate = localStorage.getItem("endDate");
    let customerId = localStorage.getItem("customerId");
    let customerName = localStorage.getItem("customerName");
    let location = localStorage.getItem("location");

    return new Assignment(Number(customerId), customerName, new Date(startDate), new Date(endDate), location);
  }

  generateProjElement() {
    let startDate = localStorage.getItem("startDate");
    let endDate = localStorage.getItem("endDate");
    let projectId = localStorage.getItem("projectId");
    let projectName = localStorage.getItem("projectName");

    return new Project(Number(projectId), projectName, new Date(startDate), new Date(endDate));
  }
}
