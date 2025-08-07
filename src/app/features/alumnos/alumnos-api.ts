import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../../../shared/entities';
import { delay, Observable } from 'rxjs';
import { DbRoutes } from '../../../shared/enums/enums';

@Injectable({
  providedIn: 'root'
})
export class AlumnosAPI {
  baseUrl = "http://localhost:3000";
  constructor(
    private http: HttpClient
  ) { }
  getAlumnos(): Observable<Student[]> {
    //PREFERIR ENUM, hardcodear students o courses
    return this.http.get<Student[]>(`${this.baseUrl}/${DbRoutes.Students}`);
  }
}
