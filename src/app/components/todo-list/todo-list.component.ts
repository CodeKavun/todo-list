import { NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ToDo } from '../../models/to-do';
import { ToDoService } from '../../services/to-do.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [NgForOf, NgIf],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos: ToDo[] = [];
  projectId: string | null = "1";

  constructor(
    private todoService: ToDoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('proj_id');
    
    if (this.projectId){
      this.todos = this.todoService.getToDosInProject(+this.projectId);
    }
  }
  
  deleteToDo(id: number): void {
    if (this.projectId) {
      this.todoService.deleteToDo(id);
      this.todos = this.todoService.getToDosInProject(+this.projectId);
    }
  }

  markAsDone(id: number, isCurrentlyDone: boolean): void {
    if (this.projectId) {
      this.todoService.markAsDone(id, !isCurrentlyDone);
    }
  }
}
