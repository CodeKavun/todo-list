import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { PROJECTS } from './mock-project';
import { JsonStorage } from '../utils/json-storage';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = JsonStorage.getInstance().load('projects', PROJECTS);

  constructor() { }

  getProjects(): Project[] {
    return this.projects;
  }

  getProject(id: number): Project | undefined {
    return this.projects.find(proj => proj.id === id);
  }

  addProject(project: Project): void {
    this.projects.push(project);
    JsonStorage.getInstance().save(this.projects, 'projects');
  }
  
  deleteProject(id: number): void {
    this.projects = this.projects.filter(proj => proj.id !== id);
    JsonStorage.getInstance().save(this.projects, 'projects');
  }
}
