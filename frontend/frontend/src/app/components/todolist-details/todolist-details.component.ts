import { Component, Input, OnInit } from '@angular/core';
import { TodolistService } from 'src/app/services/todolist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todolist } from 'src/app/models/todolist.model';

@Component({
  selector: 'app-todolist-details',
  templateUrl: './todolist-details.component.html',
  styleUrls: ['./todolist-details.component.css'],
})
export class TodolistDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentTodolist: Todolist = {
    title: '',
    description: '',
    published: false,
  };

  message = '';
  current!: any;

  constructor(
    private todolistService: TodolistService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTodolist(this.route.snapshot.params['id']);
    }
  }

  getTodolist(id: string): void {
    this.todolistService.get(id).subscribe({
      next: (data) => {
        this.currentTodolist = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentTodolist.title,
      description: this.currentTodolist.description,
      published: status,
    };

    this.message = '';

    this.todolistService.update(this.currentTodolist.id, data).subscribe({
      next: (res) => {
        console.log(res);
        this.currentTodolist.published = status;
        this.message = res.message
          ? res.message
          : 'The status was updated successfully!';
      },
      error: (e) => console.error(e),
    });
  }

  updateTodolist(): void {
    this.message = '';

    this.todolistService
      .update(this.currentTodolist.id, this.currentTodolist)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This todolist was updated successfully!';
        },
        error: (e) => console.error(e),
      });
  }
  deleteTodolist(): void {
    this.todolistService.delete(this.currentTodolist.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/todolists']);
      },
      error: (e) => console.error(e),
    });
  }
}
