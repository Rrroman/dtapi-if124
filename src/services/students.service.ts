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
            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsIlJvbGVzIjp7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifSwiZXhwIjoxNjIxNTQ2ODc0LCJpYXQiOjE2MjE1NDMyNzQsImp0aSI6IjI0In0.TlBFYlTMkeamRfjKd047PEOPaRbmK8D2SNQXwj8-xS_w4xJf3044-jq37JjVnBys-UYEFcPfgr9BeRREejVAMQ',
        },
      })
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }
}
