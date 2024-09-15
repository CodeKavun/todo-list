import { Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';

export const routes: Routes = [
    { path: '', redirectTo: '/projects', pathMatch: 'full' },
    { path: 'projects', component: ProjectListComponent },
    { path: 'projects/create', component: ProjectFormComponent },
    { path: 'projects/:proj_id/todos', component: TodoListComponent },
    { path: 'projects/:proj_id/todos/add', component: TodoFormComponent },
    { path: 'projects/:proj_id/todos/edit/:todo_id', component: TodoFormComponent }
];
