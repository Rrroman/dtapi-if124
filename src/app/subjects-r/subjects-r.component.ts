import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-subjects-r',
  templateUrl: './subjects-r.component.html',
  styleUrls: ['./subjects-r.component.scss'],
})
export class SubjectsRComponent {
  public subjectForm = new FormGroup({
    subjectName: new FormControl(''),
    subjectDescription: new FormControl(''),
  });
}
