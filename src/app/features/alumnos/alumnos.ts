import { Component } from '@angular/core';
import { AlumnosAPI } from './alumnos-api';
import { Student } from '../../../shared/entities';
import { CommonModule, JsonPipe } from '@angular/common';
import { StudentsTable } from '../../students-table/students-table';

@Component({
  selector: 'app-alumnos',
  imports: [JsonPipe, CommonModule, StudentsTable],
  templateUrl: './alumnos.html',
  styleUrl: './alumnos.css'
})
export class Alumnos {
  alumnos!: Student[];
  constructor(private alumnosApi: AlumnosAPI) { }

  ngOnInit() {
    // cuando llegan los datos, hacer esto
    // 
    this.alumnosApi.getAlumnos().subscribe(alumnos => {
      this.alumnos = alumnos;
    });


  }
}
