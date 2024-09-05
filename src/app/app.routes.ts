import { Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';

export const routes: Routes = [
    { path: '', redirectTo: '/todos', pathMatch: 'full' },
    { path: 'todos', component: TodoListComponent },
    { path: 'todos/add', component: TodoFormComponent },
    { path: 'todos/edit/:id', component: TodoFormComponent }
];
