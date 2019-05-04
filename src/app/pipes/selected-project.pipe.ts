import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../projects';
@Pipe({

    name: 'selectedProject'
})
export class SelectedProjectPipe implements PipeTransform {
    transform(allProjects: Project[], projectId: number): any {
        return allProjects.filter(p => p.id === projectId);
    }
}
