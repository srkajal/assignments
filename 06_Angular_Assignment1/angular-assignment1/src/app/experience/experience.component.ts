import { Component, OnInit } from '@angular/core';
import { PreviousWorkExperience } from '../model/PreviousWorkExperience.model';
import { ExperienceDetails } from '../model/ExperienceDetails.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  previousWorkExperiences: PreviousWorkExperience[];
  experienceDetails: ExperienceDetails;

  constructor(private router: Router) {
    this.experienceDetails = new ExperienceDetails(1, 0, 0);
    this.previousWorkExperiences = [new PreviousWorkExperience(new Date("10-02-2010"), new Date("04-03-2015"), "ABC Company")];
    this.updateExperienceDetails();
  }

  ngOnInit() {
    this.getExperienceFromStorage();
  }

  addExperience() {
    localStorage.clear();
    console.log("date:" + this.previousWorkExperiences[this.previousWorkExperiences.length - 1].hireDate);
    localStorage.setItem("preExpHire", this.previousWorkExperiences[this.previousWorkExperiences.length - 1].hireDate.toString());
    this.router.navigate(['updateExperience']);
  }

  removeExperience() {
    if (this.previousWorkExperiences.length == 1) {
      alert("Atleast one previous experience required");
    } else {
      this.previousWorkExperiences.pop();
      this.updateExperienceDetails();
      localStorage.clear();
    }

    this.router.navigate(['experience']);
  }

  public getExperienceFromStorage() {
    this.getStorageData();
    this.updateExperienceDetails();
  }

  updateExperienceDetails() {
    this.experienceDetails.totalExperience = this.monthDiffFromList();
    this.experienceDetails.noOfPreviousEmployeer = this.previousWorkExperiences.length;
  }

  getStorageData() {
    let add = localStorage.getItem("addExperience");

    if (add) {

      console.log("Add:" + add);
      this.previousWorkExperiences.push(this.generateElement());

    } else {
      console.log("No data in localStorage");
    }
  }

  generateElement() {
    let hireDate = localStorage.getItem("hireDate");
    let endDate = localStorage.getItem("endDate");
    let employeer = localStorage.getItem("employeer");

    return new PreviousWorkExperience(new Date(hireDate), new Date(endDate), employeer);
  }

  monthDiffFromList() {
    let totalMonths = 0;
    console.log(this.previousWorkExperiences.length);
    this.previousWorkExperiences.forEach(e => {
      totalMonths += this.monthDiff(e.hireDate, e.endDate);
    })
    return totalMonths;
  }
  monthDiff(d1: Date, d2: Date) {
    let months = 0;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }
}
