import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodolistComponent } from './components/add-todolist/add-tutorial.component';
import { TodolistDetailsComponent } from './components/todolist-details/todolist-details.component';

@NgModule({
  declarations: [
    AppComponent,

    TodolistDetailsComponent,
    AddTodolistComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
