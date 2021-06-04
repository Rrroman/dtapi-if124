import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { SubjectI } from 'src/app/interfaces/subject';

@Injectable({
  providedIn: 'root',
})
export class SubjectVService {
  public constructor(private httpClient: HttpClient) {}

  public transmissionOfSubject$ = new Subject<SubjectI>();

  public getSubjects(): Observable<Array<SubjectI>> {
    return this.httpClient.get('http://dtapi.if.ua:8080/subjects').pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  public changeSubject(subject: SubjectI): Observable<SubjectI> {
    const body = {
      subjectName: subject.subjectName.trim(),
      subjectDescription: subject.subjectDescription.trim(),
    };
    return this.httpClient
      .put(`http://dtapi.if.ua:8080/subjects/${subject.subjectId}`, body)
      .pipe(
        map((res: any) => {
          this.transmitDataBetweenComponent(res.data);
          return res.data;
        })
      );
  }

  public transmitDataBetweenComponent(subject: SubjectI): void {
    this.transmissionOfSubject$.next(subject);
  }
}
