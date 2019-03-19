import { Component, OnInit } from '@angular/core';
import { PreviousWorkExperience } from '../model/PreviousWorkExperience.model';
import { ExperienceDetails } from '../model/ExperienceDetails.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  previousWorkExperiences: PreviousWorkExperience[];
  experienceDetails: ExperienceDetails;

  constructor() {
    this.experienceDetails = new ExperienceDetails(1,1, 28);
    this.previousWorkExperiences = [new PreviousWorkExperience(new Date("10-02-2010"), new Date("04-03-2015"), "ABC Company"),
                                    new PreviousWorkExperience(new Date("10-01-2010"), new Date("04-03-2009"), "DEF Company")];
   }

  ngOnInit() {
  }

}
