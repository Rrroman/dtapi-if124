import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from '../interfaces/Subjects';
import { SubjectVService } from 'src/services/subject-v.service';

@Component({
  selector: 'app-dialog-change',
  templateUrl: './dialog-change.component.html',
  styleUrls: ['./dialog-change.component.scss'],
})
export class DialogChangeComponent {
  formForChanges: FormGroup;
  public constructor(
    @Inject(MAT_DIALOG_DATA) public data: Subject,
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

  public submit(): void {
    const subject: Subject = {
      subjectId: this.data.subjectId,
      subjectName: this.formForChanges.value.subjectName,
      subjectDescription: this.formForChanges.value.subjectDescription,
    };
    this.subjectServiceV.changeSubject(subject).subscribe((res) => {
      console.log(res);
    });
  }
}
