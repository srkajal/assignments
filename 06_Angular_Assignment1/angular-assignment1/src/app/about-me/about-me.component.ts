import { Component, OnInit } from '@angular/core';
import { AboutMe } from '../model/aboutMe.model';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  aboutMe: AboutMe;
  constructor() { 
    this.aboutMe = new AboutMe("Kajal", "Mallick", 12345, "kajal.mallick@cognizant.com");
  }

  ngOnInit() {
  }

}
