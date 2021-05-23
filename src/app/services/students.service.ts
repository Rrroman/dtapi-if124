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
      .get(`http://dtapi.if.ua:8080/students/classes/${idClass}`)
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }
}
