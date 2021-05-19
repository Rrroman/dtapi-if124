import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SubjectVService } from 'src/services/subject-v.service';
import { Subjects } from './interfaces/Subjects';

@Component({
  selector: 'app-subjects-v',
  templateUrl: './subjects-v.component.html',
  styleUrls: ['./subjects-v.component.scss'],
})
export class SubjectsVComponent implements AfterViewInit, OnInit {
  public displayedColumns: string[] = ['subjectName', 'subjectDescription'];

  public dataSource = new MatTableDataSource();

  @ViewChild(MatSort) public sort!: MatSort;

  public constructor(private subjectServiceV: SubjectVService) {}

  public ngOnInit(): void {
    this.subjectServiceV.getSubjects().subscribe((res: Array<Subjects>) => {
      this.dataSource.data = res;
    });
  }

  public changeSubjects(subjectId: number): void {
    console.log(subjectId);
  }

  public ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
