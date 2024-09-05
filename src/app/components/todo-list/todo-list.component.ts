import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { ToDo } from '../../models/to-do';
import { ToDoService } from '../../services/to-do.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos: ToDo[] = [];

  constructor(private todoService: ToDoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getToDos();
  }

  deleteToDo(id: number): void {
    this.todoService.deleteToDo(id);
    this.todos = this.todoService.getToDos();
  }
}
