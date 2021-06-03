import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SubjectI } from '../interfaces/subject';

@Injectable({
  providedIn: 'root',
})
export class SubjectsRService {
  public constructor(private http: HttpClient) {}

  public senGetRequest(): Observable<SubjectI[]> {
    return this.http
      .get<Array<SubjectI>>('http://dtapi.if.ua:8080/subjects')
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }
}
