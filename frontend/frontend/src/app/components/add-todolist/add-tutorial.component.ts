import { Component } from '@angular/core';
import { Todolist } from 'src/app/models/todolist.model';
import { TodolistService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-add-todolist',
  templateUrl: './add-todolist.component.html',
  styleUrls: ['./add-todolist.component.css'],
})
export class AddTodolistComponent {
  todolist: Todolist = {
    title: '',
    description: '',
    published: false,
  };
  submitted = false;
  tutorial: any;

  constructor(private todolistService: TodolistService) {}

  saveTodolist(): void {
    const data = {
      title: this.todolist.title,
      description: this.todolist.description,
    };

    this.todolistService.create(data).subscribe({
      next: (res: any) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e: any) => console.error(e),
    });
  }

  newTodolist(): void {
    this.submitted = false;
    this.todolist = {
      title: '',
      description: '',
      published: false,
    };
  }
}
