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
   this.initForm();
  }


  public submit(): void {
    const student: Student = {
      ...this.formConfig.value
    };
    console.log(student);
    
    this.studentService.changeStudent(student).subscribe((res) => {
      this.data = res;
    });
  }

  private initForm(): void {
    this.formConfig = this.fb.group({
      lastname: [this.data.lastname, [Validators.required]],
      firstname: [this.data.firstname, [Validators.required]],
      patronymic: [this.data.patronymic, [Validators.required]],
      dateOfBirth: [this.data.dateOfBirth, [Validators.required]],
      classe: [this.data.classe, [Validators.required]],
    });
  }
  
}
