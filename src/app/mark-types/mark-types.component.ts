import { Component, OnInit } from '@angular/core';
// import { MatTableDataSource } from '@angular/material/table';s
import { MatDialog } from '@angular/material/dialog';
import { MarkTypesService } from '../services/mark-types/mark-types.service';

@Component({
  selector: 'app-mark-types',
  templateUrl: './mark-types.component.html',
  styleUrls: ['./mark-types.component.scss'],
})
export class MarkTypesComponent implements OnInit {
  public displayedColumns: string[] = ['subjectName', 'subjectDescription'];

  // public markTypes = new MatTableDataSource();
  public markType: any;

  public constructor(
    public dialog: MatDialog,
    private markTypesService: MarkTypesService
  ) {}

  public ngOnInit(): void {
    this.markTypesService.getMarkTypes().subscribe((data) => {
      this.markType = data;
      console.log(this.markType);
    });
  }
}
