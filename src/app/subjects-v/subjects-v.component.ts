import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogChangeComponent } from './dialog-change/dialog-change.component';
import { Subject } from '../interfaces/subjectr';
import { SubjectVService } from '../services/subject-v/subject-v.service';

@Component({
  selector: 'app-subjects-v',
  templateUrl: './subjects-v.component.html',
  styleUrls: ['./subjects-v.component.scss'],
})
export class SubjectsVComponent implements AfterViewInit, OnInit {
  public displayedColumns: string[] = ['subjectName', 'subjectDescription'];

  public dataSource = new MatTableDataSource();

  @ViewChild(MatSort) public sort!: MatSort;

  public constructor(
    private subjectServiceV: SubjectVService,
    private dialog: MatDialog
  ) {}

  private showSubjects(subject: Array<Subject>): void {
    this.dataSource.data = subject;
  }

  public showChangeDialog(subject: Subject): void {
    this.dialog.open(DialogChangeComponent, {
      data: subject,
    });
  }

  private getSubjects(): void {
    this.subjectServiceV.getSubjects().subscribe((res: Array<Subject>) => {
      this.showSubjects(res);
    });
  }

  public ngOnInit(): void {
    this.getSubjects();
  }

  public ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
}
