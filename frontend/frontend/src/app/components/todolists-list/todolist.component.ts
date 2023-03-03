import { Component, OnInit } from '@angular/core';
import { Todolist } from 'src/app/models/todolist.model';
import { TodolistService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistsListComponent implements OnInit {
  todolist?: Todolist[];
  currentTodolist: Todolist = {
    deleteAll: function (): void {
      throw new Error('Function not implemented.');
    }
  };
  currentIndex = -1;
  title = '';
  todolists: any;
  current: any;

  constructor(private todolistService: TodolistService) {}

  ngOnInit(): void {
    this.retrieveTodolist();
  }

  retrieveTodolist(): void {
    this.todolistService.getAll().subscribe({
      next: (data) => {
        this.todolists = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  refreshList(): void {
    this.retrieveTodolist();
    this.current = {};
    this.currentIndex = -1;
  }

  setActiveTodolist(tutorial: Todolist, index: number): void {
    this.currentTodolist = tutorial;
    this.currentIndex = index;
  }

  removeAllTodolists() : void{
    this.currentTodolist.deleteAll().subscribe({
      next: (res: any) => {
        console.log(res);
        this.refreshList();
      },
      error: (e: any) => console.error(e),
    });
  }

  searchTitle(): void {
    this.current = {};
    this.currentIndex = -1;

    this.todolistService.findByTitle(this.title).subscribe({
      next: (data) => {
        this.todolists = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
}
