import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
// ROUTES
const appRoutes: Routes = [

    { path: '', redirectTo: 'project-list', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'project-list', component: ProjectListComponent },
    { path: 'project-details/:id', component: ProjectDetailsComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true })
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
