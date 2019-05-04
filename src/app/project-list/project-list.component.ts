import { Component } from '@angular/core';
import { Project } from '../projects';
import { Router } from '@angular/router';
// USING A SERVICE INSTEAD
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  providers: [ ProjectService]
})
export class ProjectListComponent {

    projects: Project[];
      constructor(projectService: ProjectService) {
          this.projects = projectService.getProjects();
      }
  }
