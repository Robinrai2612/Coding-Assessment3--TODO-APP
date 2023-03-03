import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistsListComponent } from './todolist.component';

describe('TodolistsListComponent', () => {
  let component: TodolistsListComponent;
  let fixture: ComponentFixture<TodolistsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodolistsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodolistsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
