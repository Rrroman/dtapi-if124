import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  public classes = ['7-b', '5-a', '3-c', '8-z'];
  public oldClasses = ['3-d', '4-c', '7-s']

  constructor() { }


  ngOnInit(): void {
  }

}
