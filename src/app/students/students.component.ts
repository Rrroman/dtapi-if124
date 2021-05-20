import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

import { StudentsService } from 'src/services/students.service';
import { Students } from './interfaces/students.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  public students: Students[] = [];
  displayedColumns: string[] = ['lastname', 'firstname', 'dateOfBirth', 'classe'];

  dataSource = new MatTableDataSource(this.students);

  constructor(private studentService: StudentsService) { }

  ngOnInit(): void {
    //this.getClass();
  }

  public getClass() {
    this.studentService.getStudents('3').subscribe((res: Array<Students>) => {
      console.log(res);
      this.students = res;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}