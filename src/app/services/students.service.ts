import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Student } from '../students/interfaces/student.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  public constructor(private httpClient: HttpClient) {}

  public getStudents(idClass: number): Observable<any> {
    return this.httpClient
      .get(`${environment.baseUrl}/students/classes/${idClass}`)
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }

  public getClasses() {
    return this.httpClient.get(`${environment.baseUrl}/classes`).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  public changeStudent(student: Student): Observable<any> {
    // const body = {
    //   lastname: student.lastname,
    //   firstname: student.firstname,
    //   patronymic: student.patronymic,
    //   dateOfBirth: student.dateOfBirth,
    //   classe: student.classe,
    // };
    return this.httpClient
      .put(`${environment.baseUrl}/students/${student.id}`, student)
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }

  public deleteStudent(student: Student): Observable<any> {
    return this.httpClient
      .patch(`${environment.baseUrl}/students/${student.id}`, student)
      .pipe(
        map((response: any) => {
          return response.data;
        })
      );
  }
  public createStudent(student: Student) {
    return this.httpClient
    .post(`${environment.baseUrl}/students`, student
    ).subscribe(res => {console.log(res);
    })
  }
}

