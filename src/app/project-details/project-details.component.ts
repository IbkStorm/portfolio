import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Project } from '../projects';
import { ActivatedRoute } from '@angular/router';

// USING A SERVICE INSTEAD
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  providers: [ProjectService]
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {

    public id: number;
    projects: Project[];
    public sub: any;

    prodIdSnapshot: number;

    constructor(private projectService: ProjectService, private route: ActivatedRoute) {

        this.projects = projectService.getProjects();
    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {

            this.id = +params['id'];
        });
    }

    ngOnDestroy() {

        this.sub.unsubscribe();
    }
}
