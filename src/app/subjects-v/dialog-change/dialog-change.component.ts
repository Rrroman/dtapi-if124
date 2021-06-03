import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SubjectVService } from 'src/app/services/subject-v/subject-v.service';
import { SubjectI } from 'src/app/interfaces/subject';

@Component({
  selector: 'app-dialog-change',
  templateUrl: './dialog-change.component.html',
  styleUrls: ['./dialog-change.component.scss'],
})
export class DialogChangeComponent {
  public formForChanges: FormGroup;

  public constructor(
    @Inject(MAT_DIALOG_DATA) public data: SubjectI,
    private subjectServiceV: SubjectVService
  ) {
    this.formForChanges = new FormGroup({
      subjectName: new FormControl(data.subjectName, Validators.required),
      subjectDescription: new FormControl(
        data.subjectDescription,
        Validators.required
      ),
    });
  }

  public onSubmit(): void {
    const subject: SubjectI = {
      subjectId: this.data.subjectId,
      subjectName: this.formForChanges.value.subjectName,
      subjectDescription: this.formForChanges.value.subjectDescription,
    };
    this.subjectServiceV.changeSubject(subject).subscribe();
  }
}
