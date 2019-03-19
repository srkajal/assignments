import { Component, OnInit } from '@angular/core';
import { MyProfile } from '../model/MyProfile.model';

@Component({
  selector: 'app-profile-highlight',
  templateUrl: './profile-highlight.component.html',
  styleUrls: ['./profile-highlight.component.css']
})
export class ProfileHighlightComponent implements OnInit {
  myProfile : MyProfile;

  constructor() { 
    this.myProfile = new MyProfile(5, "Retail", "java/j2ee", ["Spring", "Hibernate", "Java"]);
  }

  ngOnInit() {
  }

}
