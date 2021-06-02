import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { StudentsService } from 'src/app/services/students.service';
import { Student } from '../interfaces/student.model';

@Component({
  selector: 'app-change-student',
  templateUrl: './change-student.component.html',
  styleUrls: ['./change-student.component.scss'],
})
export class ChangeStudentComponent implements OnInit {
  public formConfig!: FormGroup;

  public constructor(
    @Inject(MAT_DIALOG_DATA) public data: Student,
    private studentService: StudentsService,
    private fb: FormBuilder
  ) {}

  public ngOnInit(): void {
    console.log(this.data);

    this.initForm();
  }

  public submit(): void {
    const defaultStudentData = {
      login: "hekkfj589",
      email: null,
      phone: null,
      avatar: null,
      id: 0,
      classId: 9
    };
    const student: Student = {
      ...defaultStudentData,
      ...this.formConfig.value
    };

    this.studentService.addStudent(student).subscribe((newStudentData) => {
      console.log(newStudentData);
      
    }, err => console.log(err)
    );
  }

  private initForm(): void {
    if (this.data) {
      this.formConfig = this.fb.group({
        lastname: [this.data.lastname, [Validators.required]],
        firstname: [this.data.firstname, [Validators.required]],
        patronymic: [this.data.patronymic, [Validators.required]],
        dateOfBirth: [this.data.dateOfBirth, [Validators.required]],
        classe: [this.data.classe, [Validators.required]],
      });
    } else {
      this.formConfig = this.fb.group({
        lastname: ['', [Validators.required]],
        firstname: ['', [Validators.required]],
        patronymic: ['', [Validators.required]],
        dateOfBirth: ['', [Validators.required]],
        classe: ['', [Validators.required]],
      });
    }
  }
}
