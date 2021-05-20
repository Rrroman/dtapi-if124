import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Subject } from '../interfaces/subjectr';

@Injectable({
  providedIn: 'root',
})
export class SubjectsRService {
  public constructor(private http: HttpClient) {}

  public senGetRequest(): Observable<Subject[]> {
    return this.http
      .get<Array<Subject>>('http://dtapi.if.ua:8080/subjects', {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsIlJvbGVzIjp7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifSwiZXhwIjoxNjIxNTM3OTQ0LCJpYXQiOjE2MjE1MzQzNDQsImp0aSI6IjI0In0.Zblm4-85H1z6M-cnvHz76EnkTmkBfkp7Jqpqyl6Qj5N8sH6WCJ9DAeqnrs2rqwSjHOL0YqvuXj0Vu7Aeg-QV0Q',
        },
      })
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }
}
