import { AfterViewInit, Component, Input, OnInit, Output, ViewChild } from '@angular/core';
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
  public currentClazzId: number = 0;

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
    private matDialog: MatDialog
  ) {}

  public ngOnInit(): void {
    this.showClasses();
    this.getCurrentClassId();
  }

  public ngAfterViewInit(): void {
    this.students.sort = this.sort;
  }

  public getCurrentClassId() {
    this.currentClazzId = this.studentService.getCurrentClazzId();
  }

  public showStudents(classId: number): void {
    this.studentService.getStudents(classId).subscribe((res: Student[]) => {
      this.students.data = res;
      console.log(res);
    });
  }

  public showClasses(): void {
    this.studentService.getClasses().subscribe((res: Clazz[]) => {
      this.classes = res;
    });
  }

  public openAddOrEditStudentDialog(student?: Student): void {
    this.matDialog.open(ChangeStudentComponent, {
      data: student
    });

    this.matDialog.afterAllClosed.subscribe(() => this.showStudents(this.currentClazzId));
  }
}
