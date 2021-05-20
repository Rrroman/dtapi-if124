import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';

@Component({
  selector: 'app-subjects-r',
  templateUrl: './subjects-r.component.html',
  styleUrls: ['./subjects-r.component.scss'],
})
export class SubjectsRComponent {
  public constructor(public dialog: MatDialog) {}

  public openDialog() {
    this.dialog.open(DialogOverviewComponent);
  }
}
