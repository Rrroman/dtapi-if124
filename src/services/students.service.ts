import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  public constructor(private httpClient: HttpClient) {}

  public getStudents(idClass: string): Observable<any> {
    return this.httpClient
      .get(`http://dtapi.if.ua:8080/students/classes/${idClass}`, {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsIlJvbGVzIjp7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifSwiZXhwIjoxNjIxNjE3MzA3LCJpYXQiOjE2MjE2MTM3MDcsImp0aSI6IjI0In0.Ki5nP1YA_KflDHO5GB0s7xWbbKOOcZhI079HHeeb13iEEs9YHH011Q2PVt7calYjOGumTisiBoKFu0-Ft0mAVQ',
        },
      })
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }
}
// public getSubjects(): Observable<any> {
//   return this.httpClient.get('http://dtapi.if.ua:8080/subjects').pipe(
//     map((res: any) => {
//       return res.data;
//     })
//   );
// }