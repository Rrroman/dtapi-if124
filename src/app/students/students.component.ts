import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

import { StudentsService } from 'src/app/services/students.service';
import { Student } from './interfaces/student.model';
import { Clazz } from './interfaces/clazz.model';
import { ChangeStudentComponent } from './change-student/change-student.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort)
  public sort!: MatSort;

  public displayedColumns: string[] = [
    'lastname',
    'firstname',
    'patronymic',
    'dateOfBirth',
    'classe',
  ];

  public students = new MatTableDataSource();

  public classes: Clazz[] = [];

  public constructor(
    private studentService: StudentsService,
    private matdialog: MatDialog
  ) {}

  public showChangeDialog(student: Student): void {
    console.log(student);
    
    this.matdialog.open(ChangeStudentComponent, {
      data: student,
    });
  }

  public showStudents(id: number) {
    this.studentService.getStudents(id).subscribe((res: Array<Student>) => {
      this.students.data = res;
    });
  }

  public showClasses() {
    this.studentService.getClasses().subscribe((res: Array<Clazz>) => {
      this.classes = res;
    });
  }

  public ngOnInit() {
    this.showClasses();
  }

  public ngAfterViewInit() {
    this.students.sort = this.sort;
  }
}
