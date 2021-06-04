import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IMarkTypes } from 'src/app/interfaces/mark-type.interface';
import { MarkTypesService } from '../../services/mark-types/mark-types.service';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.scss'],
})
export class DialogEditComponent {
  public markTypesForm = new FormGroup({
    markTypesName: new FormControl(''),
    markTypesDescription: new FormControl(''),
    markTypesIsActive: new FormControl(''),
  });

  public editState: Boolean = false;

  public currentMarkTypeId: number = 0;

  public constructor(
    @Inject(MAT_DIALOG_DATA) public data: IMarkTypes,
    private markTypesService: MarkTypesService
  ) {
    if (data) {
      this.markTypesForm = new FormGroup({
        markTypesName: new FormControl(data.markType),
        markTypesDescription: new FormControl(data.description),
        markTypesIsActive: new FormControl(data.active),
      });
      this.editState = true;
      this.currentMarkTypeId = data.id;
    }
  }

  public edit(): void {
    if (this.editState) {
      const editMarkTypeItem: IMarkTypes = {
        id: this.currentMarkTypeId,
        markType: String(this.markTypesForm.value.markType),
        description: String(this.markTypesForm.value.description),
        active: this.markTypesForm.value.active,
      };
      this.markTypesService.editMarkTypes(editMarkTypeItem).subscribe();
    }
  }
}
