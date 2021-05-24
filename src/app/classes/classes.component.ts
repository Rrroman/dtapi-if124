import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { IClasses } from '../interfaces/classes'
import { ClasessService } from '../services/classes/clasess.service'
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogWindowComponent } from './modalWindow/dialog-window/dialog-window.component'



export interface Classes {
  class: string;
  year: number;
}
@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})


export class ClassesComponent implements OnInit {

  constructor(private classesService: ClasessService, public dialog: MatDialog) { }
  public displayedColumns: string[] = ['class', 'year', 'description', 'isActive'];
  public dataSource = new MatTableDataSource();


  public getClassesInfo() {
    this.classesService.getClassesList().subscribe((res: Array<IClasses>) => {
      this.dataSource.data = res;
    });
  }
  
  public openDialogCreateClasses(): void {
    this.dialog.open(DialogWindowComponent);
    this.dialog.afterAllClosed.subscribe(data => this.getClassesInfo());
  }

  public openDialogChangeClasses(classItem: IClasses): void {
    this.dialog.open(DialogWindowComponent, {
      data: classItem,
    });
    this.dialog.afterAllClosed.subscribe(data => this.getClassesInfo());
  }

  ngOnInit(): void {
    this.getClassesInfo();
  }
}



