import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodolistComponent } from './add-tutorial.component';

describe('AddTutorialComponent', () => {
  let component: AddTodolistComponent;
  let fixture: ComponentFixture<AddTodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTodolistComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddTodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
