import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.scss'],
})
export class DialogOverviewComponent {
  public subjectForm = new FormGroup({
    subjectName: new FormControl(''),
    subjectDescription: new FormControl(''),
  });
}
