import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Student } from '../students/interfaces/student.model';

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

  public addStudent(student: Student): Observable<any> {
    console.log(student);
    const body = {
      firstname: "Катеринепааа",
      lastname: "Полянсьвввка",
      patronymic: "Валеріївнаа",
      classe: "7-А",
      classId: 2,
      dateOfBirth: "1999-08-16",
      login: "kPolyan16",
      email: null,
      phone: null,
      avatar: null,
      id: 46
    };

    return this.httpClient
      .post(`http://dtapi.if.ua:8080/students`, body)
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }

  public changeStudent(student: Student): Observable<Student> {
    const body = {
      lastname: student.lastname,
      firstname: student.firstname,
      patronymic: student.patronymic,
      dateOfBirth: student.dateOfBirth,
      classe: student.classe,
    };
    return this.httpClient.put<Student>(
      `${environment.baseUrl}/admin/students/${student.id}`,
      body
    ).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }
}
