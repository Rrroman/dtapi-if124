import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public classAmount = 0;

  public subjectsAmount = 0;

  public teachersAmount = 0;

  public pupilsAmount = 0;

  public markTypesAmount = 0;

  public constructor(private dashboardService: DashboardService) {}

  public ngOnInit(): void {
    this.getClasses();
    this.getSubjects();
    this.getTeachers();
    this.getMarkTypes();
  }

  private getClasses() {
    this.dashboardService.getClasses().subscribe((data) => {
      this.classAmount = data.data.length;
      this.pupilsAmount = data.data.reduce(
        (accumulator: number, currentValue: any) => {
          return accumulator + currentValue.numOfStudents;
        },
        0
      );
    });
  }

  private getSubjects() {
    this.dashboardService.getSubjects().subscribe((data) => {
      this.subjectsAmount = data.data.length;
    });
  }

  private getTeachers() {
    this.dashboardService.getTeachers().subscribe((data) => {
      this.teachersAmount = data.data.length;
    });
  }

  private getMarkTypes() {
    this.dashboardService.getMarkTypes().subscribe((data) => {
      this.markTypesAmount = data.data.length;
    });
  }
}
