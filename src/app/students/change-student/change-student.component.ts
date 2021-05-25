import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentsService } from 'src/app/services/students.service';
import { Student } from '../interfaces/student.model';

@Component({
  selector: 'app-change-student',
  templateUrl: './change-student.component.html',
  styleUrls: ['./change-student.component.scss'],
})
export class ChangeStudentComponent {
  public formForChanges: FormGroup;

  public constructor(
    @Inject(MAT_DIALOG_DATA) public data: Student,
    private studentService: StudentsService
  ) {
    this.formForChanges = new FormGroup({
      lastname: new FormControl(data.lastname, Validators.required),
      firstname: new FormControl(data.firstname, Validators.required),
      patronymic: new FormControl(data.patronymic, Validators.required),
      dateOfBirth: new FormControl(data.dateOfBirth, Validators.required),
      classe: new FormControl(data.classe, Validators.required),
    });
  }

  public submit(): void {
    const student: Student = {
      id: this.data.id,
      lastname: this.formForChanges.value.lastname,
      firstname: this.formForChanges.value.firstname,
      patronymic: this.formForChanges.value.patronymic,
      dateOfBirth: this.formForChanges.value.dateofBirth,
      classe: this.formForChanges.value.classe,
      

    };
    this.studentService.changeStudent(student).subscribe((res) => {
      this.data = res;
    });
  }
}
