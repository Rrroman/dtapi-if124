import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Subject } from 'src/interfaces/Subjects';

@Injectable({
  providedIn: 'root',
})
export class SubjectVService {
  public constructor(private httpClient: HttpClient) {}

  public getSubjects(): Observable<any> {
    return this.httpClient.get('http://dtapi.if.ua:8080/subjects').pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  public changeSubject(subject: Subject): Observable<any> {
    const body = {
      subjectName: subject.subjectName,
      subjectDescription: subject.subjectDescription,
    };
    return this.httpClient
      .put(`http://dtapi.if.ua:8080/subjects/${subject.subjectId}`, body)
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }
}
