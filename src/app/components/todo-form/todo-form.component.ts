import { Component, Input } from '@angular/core';
import { ToDo } from '../../models/to-do';
import { ToDoService } from '../../services/to-do.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  @Input() todo: ToDo = new ToDo(0, 1, '', '', 0, 0);

  constructor(
    private todoService: ToDoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('todo_id');

    if (id) {
      const existingTodo = this.todoService.getToDo(+id);
      if (existingTodo) {
        this.todo = existingTodo;
      }
    }
  }

  onSave(): void {
    if (this.todo.id) {
      this.todoService.updateToDo(this.todo);
    } else {
      const newId = this.todoService.getToDos().length + 1;
      const projectId = this.route.snapshot.paramMap.get('proj_id');

      this.todo.id = newId;
      if (projectId) this.todo.projectId = +projectId;
      this.todoService.addToDo(this.todo);
    }

    this.router.navigate([`projects/${this.todo.projectId}/todos`]);
  }

  getProjectId() {
    return this.route.snapshot.paramMap.get('proj_id');
  }
}
