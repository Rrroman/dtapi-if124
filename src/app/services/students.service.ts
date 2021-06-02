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

  public createStudent(student: Student) {
    return this.httpClient
    .post(`${environment.baseUrl}/students`, student
    ).subscribe(res => {console.log(res);
    })
  }

  public changeStudent(student: Student): Observable<any> {
    return this.httpClient
      .put(`${environment.baseUrl}/students/${student.id}`, student);
  }

  public deleteStudent(id: string): Observable<any> {
    return this.httpClient
      .delete(`${environment.baseUrl}/students/${id}`)
  }
  
}

