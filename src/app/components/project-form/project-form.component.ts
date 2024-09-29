import { Component } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Router } from '@angular/router';
import { Project } from '../../models/project';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.css'
})
export class ProjectFormComponent {
  project: Project = new Project(0, '');

  constructor (
    private projectService: ProjectService,
    private router: Router
  ) { }

  onCreate() {
    this.project.id = this.getNextId();
    this.projectService.addProject(this.project);

    this.router.navigate(['projects/']);
  }

  private getNextId(): number {
    const projects = this.projectService.getProjects();
    let max = projects[0].id;

    projects.forEach(element => {
      if (element.id > max) max = element.id;
    });

    return max + 1;
  }
}
