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
      .get<Array<Subject>>('http://dtapi.if.ua:8080/subjects')
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }
}
