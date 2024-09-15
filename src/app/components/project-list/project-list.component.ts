import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
  projects: Project[] = [];

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  deleteProject(id: number) {
    this.projectService.deleteProject(id);
    this.projects = this.projectService.getProjects();
  }
}
