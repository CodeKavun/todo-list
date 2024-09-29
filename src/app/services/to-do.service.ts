import { Injectable } from '@angular/core';
import { ToDo } from '../models/to-do';
import { JsonStorage } from '../utils/json-storage';
import { TODOS } from './mock-todo';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private todos: ToDo[] = JsonStorage.getInstance().load('todos', TODOS);

  constructor() { }

  getToDos(): ToDo[] {
    return this.todos.sort((a, b) => b.priority - a.priority);
  }

  getToDosInProject(projectId: number): ToDo[] {
    return this.getToDos().filter(todo => todo.projectId === projectId);
  }

  getToDo(id: number): ToDo | undefined {
    return this.todos.find(todo => todo.id === id);
  }

  addToDo(todo: ToDo): void {
    this.todos.push(todo);
    JsonStorage.getInstance().save(this.todos, 'todos');
  }

  updateToDo(updatedToDo: ToDo): void {
    const index = this.todos.findIndex(todo => todo.id === updatedToDo.id);

    if (index !== -1) {
      this.todos[index] = updatedToDo;
    }

    JsonStorage.getInstance().save(this.todos, 'todos');
  }

  markAsDone(id: number, done: boolean): void {
    const doneTodo = this.getToDo(id);
    
    if (doneTodo) {
      doneTodo.isDone = done;
      this.updateToDo(doneTodo);
    }
  }

  deleteToDo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
    JsonStorage.getInstance().save(this.todos, 'todos');
  }
}
