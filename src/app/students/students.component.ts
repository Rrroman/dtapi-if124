import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { StudentsService } from 'src/services/students.service';
import { Students } from './interfaces/students.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements AfterViewInit {
  @ViewChild(MatSort)
  public sort!: MatSort;

  public students: Students[] = [];

  public displayedColumns: string[] = [
    'classId',
    'lastname',
    'firstname',
    'dateOfBirth',
    'classe',
  ];

  dataSource = new MatTableDataSource(this.students);

  public constructor(private studentService: StudentsService) {}

  public ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  public getClass(id: string) {
    this.studentService.getStudents(id).subscribe((res: Array<Students>) => {
      this.students = res;
    });
  }
}
