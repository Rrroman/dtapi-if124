import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { IMarkTypes } from 'src/app/interfaces/mark-type.interface';
import { MatSort } from '@angular/material/sort';
import { MarkTypesService } from '../services/mark-types/mark-types.service';
import { DialogEditComponent } from './dialog-edit/dialog-edit.component';

@Component({
  selector: 'app-mark-types',
  templateUrl: './mark-types.component.html',
  styleUrls: ['./mark-types.component.scss'],
})
export class MarkTypesComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort)
  public sort!: MatSort;

  public displayedColumns: string[] = [
    'id',
    'markType',
    'description',
    'active',
  ];

  public dataSource = new MatTableDataSource();

  public constructor(
    public dialog: MatDialog,
    private markTypesService: MarkTypesService
  ) {}

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public getMarks(): void {
    this.markTypesService.getMarkTypes().subscribe((data: IMarkTypes[]) => {
      this.dataSource.data = data;
    });
  }

  public openMarkTypesEdit(): void {
    this.dialog.open(DialogEditComponent);
    this.dialog.afterAllClosed.subscribe(() => this.getMarks());
  }

  public ngOnInit(): void {
    this.getMarks();
  }

  public ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
}
