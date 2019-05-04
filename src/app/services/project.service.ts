import { Injectable } from '@angular/core';
import { PROJECTS } from '../projects';

@Injectable()
export class ProjectService {

    constructor() { }
    getProjects() {
        return PROJECTS;
    }
}
