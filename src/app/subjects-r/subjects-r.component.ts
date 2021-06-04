import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';
import { SubjectsRService } from '../services/subject-r/subjects-r.service';
import { SubjectI } from '../interfaces/subject';

@Component({
  selector: 'app-subjects-r',
  templateUrl: './subjects-r.component.html',
  styleUrls: ['./subjects-r.component.scss'],
})
export class SubjectsRComponent implements OnInit, OnDestroy {
  public displayedColumns: string[] = ['subjectName', 'subjectDescription'];

  private subscription: Subscription = new Subscription();

  public subjects = new MatTableDataSource();

  public constructor(
    public dialog: MatDialog,
    private subjectsRService: SubjectsRService
  ) {}

  public openDialog(
    subject: SubjectI = {
      subjectId: 0,
      subjectName: '',
      subjectDescription: '',
    }
  ) {
    this.dialog.open(DialogOverviewComponent, {
      data: subject,
    });
  }

  public ngOnInit() {
    this.subscription = this.subjectsRService.refreshNeeded$.subscribe(() => {
      this.getAllSubjects();
    });
    this.getAllSubjects();
  }

  private getAllSubjects() {
    this.subjectsRService.getSubjectRequest().subscribe((data) => {
      this.subjects.data = data;
    });
  }

  updateSubject(data: any) {
    console.log(data.subjectId);
    this.openDialog(data);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
