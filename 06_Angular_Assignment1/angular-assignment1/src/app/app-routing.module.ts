import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProfileHighlightComponent } from './profile-highlight/profile-highlight.component';
import { ProjectComponent } from './project/project.component';
import { PersonalBiographyComponent } from './personal-biography/personal-biography.component';
import { UpdateExperienceComponent } from './update-experience/update-experience.component';
import { UpdateAssignmentComponent } from './update-assignment/update-assignment.component';
import { UpdateProjectComponent } from './update-project/update-project.component';

const routes: Routes = [
  {path:"", redirectTo: "home", pathMatch: "full"},
  {path:"home", component: AboutMeComponent},
  {path:"contactMe", component: ContactmeComponent},
  {path:"experience", component: ExperienceComponent},
  {path:"profileHighlight", component: ProfileHighlightComponent},
  {path:"personalBiography", component: PersonalBiographyComponent},
  {path:"project", component: ProjectComponent},
  {path:"updateExperience", component: UpdateExperienceComponent},
  {path:"updateAssignment", component: UpdateAssignmentComponent},
  {path:"updateProject", component: UpdateProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
