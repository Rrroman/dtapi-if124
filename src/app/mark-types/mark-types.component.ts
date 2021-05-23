import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { IMarkTypes } from 'src/app/interfaces/mark-type.interface';
import { MarkTypesService } from '../services/mark-types/mark-types.service';

@Component({
  selector: 'app-mark-types',
  templateUrl: './mark-types.component.html',
  styleUrls: ['./mark-types.component.scss'],
})
export class MarkTypesComponent implements OnInit {
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

  public ngOnInit(): void {
    this.getMarks();
  }
}
