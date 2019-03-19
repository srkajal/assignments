import { Component, OnInit } from '@angular/core';
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

  constructor() { 
    this.projects =  [new Project(12, "AWS", new Date("02-03-2015"), new Date("02-03-2017"))];
    this.assignments = [new Assignment(1234, "ABC", new Date("02-03-2015"), new Date("02-03-2016"), "Bangalore"),
                        new Assignment(1235, "ABD", new Date("02-03-2016"), new Date("02-03-2017"), "Bangalore")];

  }

  ngOnInit() {
  }

}
