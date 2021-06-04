import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SubjectsRService } from 'src/app/services/subject-r/subjects-r.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubjectI } from 'src/app/interfaces/subject';

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.scss'],
})
export class DialogOverviewComponent {
  public create: Boolean = false;

  public constructor(
    @Inject(MAT_DIALOG_DATA) public data: SubjectI,
    private subjectsRService: SubjectsRService
  ) {}

  public subjectForm = new FormGroup({
    subjectName: new FormControl(this.data.subjectName),
    subjectDescription: new FormControl(this.data.subjectDescription),
  });

  createSubject() {
    this.create = true;
  }

  onSubmit() {
    if (this.create == true) {
      this.subjectsRService
        .sendSubjectRequest(
          this.subjectForm.value.subjectName,
          this.subjectForm.value.subjectDescription
        )
        .subscribe((res) => console.log(res));
    } else {
      this.subjectsRService
        .updateSubjectRequest(
          this.subjectForm.value.subjectName,
          this.subjectForm.value.subjectDescription,
          this.data.subjectId
        )
        .subscribe((res) => console.log(res));
    }
  }
}
