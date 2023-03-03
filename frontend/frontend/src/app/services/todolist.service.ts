import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todolist } from '../models/todolist.model';

const baseUrl = 'http://localhost:8080/api/todolists';

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Todolist[]> {
    return this.http.get<Todolist[]>(baseUrl);
  }

  get(id: any): Observable<Todolist> {
    return this.http.get<Todolist>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Todolist[]> {
    return this.http.get<Todolist[]>(`${baseUrl}?title=${title}`);
  }
}
