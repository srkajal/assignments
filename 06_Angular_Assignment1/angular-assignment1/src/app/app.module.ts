import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { ExperienceComponent } from './experience/experience.component';
import { PersonalBiographyComponent } from './personal-biography/personal-biography.component';
import { ProjectComponent } from './project/project.component';
import { ProfileHighlightComponent } from './profile-highlight/profile-highlight.component';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactmeComponent,
    ExperienceComponent,
    PersonalBiographyComponent,
    ProjectComponent,
    ProfileHighlightComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
