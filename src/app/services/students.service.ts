import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Student } from '../students/interfaces/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  public constructor(private httpClient: HttpClient) {}

  public getStudents(idClass: number): Observable<any> {
    return this.httpClient
      .get(`http://dtapi.if.ua:8080/students/classes/${idClass}`)
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }

  public getClasses() {
    return this.httpClient.get(`http://dtapi.if.ua:8080/classes`).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  public changeStudent(student: Student): Observable<any> {
    const body = {
      lastname: student.lastname,
      firstname: student.firstname,
      patronymic: student.patronymic,
      dateOfBirth: student.dateOfBirth,
      classe: student.classe,
    };
    return this.httpClient
      .put(`http://dtapi.if.ua:8080/students/${student.id}`, body)
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }

  public deleteStudent(student: Student): Observable<any> {
    return this.httpClient
      .patch(`http://dtapi.if.ua:8080/students/${student.id}`, student)
      .pipe(
        map((response: any) => {
          return response.data;
        })
      );
  }
}
