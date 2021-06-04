import {
  Component,
  AfterViewInit,
  ViewChild,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { DialogChangeComponent } from './dialog-change/dialog-change.component';
import { SubjectVService } from '../services/subject-v/subject-v.service';
import { SubjectI } from '../interfaces/subject';

@Component({
  selector: 'app-subjects-v',
  templateUrl: './subjects-v.component.html',
  styleUrls: ['./subjects-v.component.scss'],
})
export class SubjectsVComponent implements AfterViewInit, OnInit, OnDestroy {
  private subOnTransmittedSubject!: Subscription;

  public displayedColumns: string[] = ['subjectName', 'subjectDescription'];

  public dataSource = new MatTableDataSource();

  @ViewChild(MatSort) public sort!: MatSort;

  public constructor(
    private subjectServiceV: SubjectVService,
    private dialog: MatDialog
  ) {}

  private showSubjects(subject: Array<SubjectI>): void {
    this.dataSource.data = subject;
  }

  public showChangeDialog(subject: SubjectI): void {
    this.dialog.open(DialogChangeComponent, {
      data: subject,
    });
  }

  private getSubjects(): void {
    this.subjectServiceV.getSubjects().subscribe((res: Array<SubjectI>) => {
      this.showSubjects(res);
    });
  }

  private changeOurSubjects(subject: SubjectI): Array<SubjectI> {
    return this.dataSource.data.map((subj: any) => {
      if (subj.subjectId === subject.subjectId) {
        subj.subjectDescription = subject.subjectDescription;
        subj.subjectName = subject.subjectName;
      }
      return subj;
    });
  }

  public ngOnInit(): void {
    this.getSubjects();
    this.subOnTransmittedSubject =
      this.subjectServiceV.transmissionOfSubject$.subscribe((subject) => {
        this.changeOurSubjects(subject);
        this.dialog.closeAll();
      });
  }

  public ngOnDestroy(): void {
    this.subOnTransmittedSubject.unsubscribe();
  }

  public ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
}
