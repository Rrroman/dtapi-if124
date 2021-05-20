import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';
import { SubjectsRService } from '../services/subjects-r.service';

@Component({
  selector: 'app-subjects-r',
  templateUrl: './subjects-r.component.html',
  styleUrls: ['./subjects-r.component.scss'],
})
export class SubjectsRComponent implements OnInit {
  public displayedColumns: string[] = ['subjectName', 'subjectDescription'];

  public subjects = new MatTableDataSource();

  public constructor(
    public dialog: MatDialog,
    private subjectsRService: SubjectsRService
  ) {}

  public openDialog() {
    this.dialog.open(DialogOverviewComponent);
  }

  public ngOnInit() {
    this.subjectsRService.senGetRequest().subscribe((data) => {
      this.subjects.data = data;
      console.log(this.subjects.data);
    });
  }
}
