import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  IClasses,
  IClassesCreate,
  IClassesEdit,
} from '../../../interfaces/classes';
import { ClasessService } from '../../../services/classes/clasess.service';

@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.scss'],
})
export class DialogWindowComponent {
  public classesForm = new FormGroup({
    classesYear: new FormControl(''),
    classesName: new FormControl(''),
    classesDescription: new FormControl(''),
    classesIsActive: new FormControl(''),
  });

  // states
  public editState: Boolean = false;

  public createState: Boolean = false;

  public currentClassId: number = 0;

  public constructor(
    @Inject(MAT_DIALOG_DATA) public data: IClasses,
    private classesService: ClasessService
  ) {
    if (data) {
      this.classesForm = new FormGroup({
        classesYear: new FormControl(data.classYear),
        classesName: new FormControl(data.className),
        classesDescription: new FormControl(data.classDescription),
        classesIsActive: new FormControl(data.isActive),
      });
      this.editState = true;
      this.currentClassId = data.id;
    } else {
      this.createState = true;
    }
  }

  public save(): void {
    if (this.createState) {
      const newClassItem: IClassesCreate = {
        classYear: parseInt(this.classesForm.value.classesYear, 10),
        className: String(this.classesForm.value.classesName),
        classDescription: String(this.classesForm.value.classesDescription),
        isActive: this.classesForm.value.classesIsActive,
      };
      this.classesService.createClass(newClassItem).subscribe();
    } else if (this.editState) {
      const editClassItem: IClassesEdit = {
        id: this.currentClassId,
        classYear: parseInt(this.classesForm.value.classesYear, 10),
        className: String(this.classesForm.value.classesName),
        classDescription: String(this.classesForm.value.classesDescription),
        isActive: this.classesForm.value.classesIsActive,
      };
      this.classesService.editClass(editClassItem).subscribe();
    }
  }
}
