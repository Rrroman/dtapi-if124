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
            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsIlJvbGVzIjp7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifSwiZXhwIjoxNjIxNTIwNjk0LCJpYXQiOjE2MjE1MTcwOTQsImp0aSI6IjI0In0.d6qXktR-zfZJfuE9SO8_7ppCw7d3tV9pZ2AWcMlX8SWrPNZ7_uWASMxlcjR2TLqf849Nxvb8sBXmcLbHzWotpA',
        },
      })
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }
}