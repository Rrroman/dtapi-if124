import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { IClasses } from '../interfaces/classes';
import { ClasessService } from '../services/classes/clasess.service';
import { DialogWindowComponent } from './modalWindow/dialog-window/dialog-window.component';

export interface Classes {
  class: string;
  year: number;
}
@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss'],
})
export class ClassesComponent implements OnInit {
  public constructor(
    private classesService: ClasessService,
    public dialog: MatDialog
  ) {}

  public displayedColumns: string[] = [
    'class',
    'year',
    'description',
    'isActive',
  ];

  public dataSource = new MatTableDataSource();

  public getClassesInfo() {
    this.classesService.getClassesList().subscribe((res: Array<IClasses>) => {
      this.dataSource.data = res;
      console.log(res);
    });
  }

  public openDialogCreateClasses(): void {
    this.dialog.open(DialogWindowComponent);
    this.dialog.afterAllClosed.subscribe(() => this.getClassesInfo());
  }

  public openDialogChangeClasses(classItem: IClasses): void {
    this.dialog.open(DialogWindowComponent, {
      data: classItem,
    });
    this.dialog.afterAllClosed.subscribe(() => this.getClassesInfo());
  }

  public ngOnInit(): void {
    this.getClassesInfo();
  }
}
