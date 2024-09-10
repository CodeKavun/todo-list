import { Injectable } from '@angular/core';
import { ToDo } from '../models/to-do';
import { TODOS } from './mock-todo';
import { JsonStorage } from '../utils/json-storage';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private todos: ToDo[] = JsonStorage.getInstance().load();

  constructor() { }

  getToDos(): ToDo[] {
    return this.todos.sort((a, b) => b.priority - a.priority);
  }

  getToDo(id: number): ToDo | undefined {
    return this.todos.find(todo => todo.id === id);
  }

  addToDo(todo: ToDo): void {
    this.todos.push(todo);
    JsonStorage.getInstance().save(this.todos);
  }

  updateToDo(updatedToDo: ToDo): void {
    const index = this.todos.findIndex(todo => todo.id === updatedToDo.id);

    if (index !== -1) {
      this.todos[index] = updatedToDo;
    }

    JsonStorage.getInstance().save(this.todos);
  }

  deleteToDo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
    JsonStorage.getInstance().save(this.todos);
  }
}
