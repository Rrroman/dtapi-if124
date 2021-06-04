import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SubjectI } from '../../interfaces/subject';

@Injectable({
  providedIn: 'root',
})
export class SubjectsRService {
  public constructor(private http: HttpClient) {}

  private _refreshNeeded$ = new Subject<void>();

  public get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  public getSubjectRequest(): Observable<SubjectI[]> {
    return this.http
      .get<Array<SubjectI>>(`${environment.baseUrl}/subjects`)
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }

  public sendSubjectRequest(
    subjectName: string,
    subjectDescription: string
  ): Observable<any> {
    const body = {
      subjectName,
      subjectDescription,
    };
    return this.http.post(`${environment.baseUrl}/subjects`, body).pipe(
      tap(() => {
        this._refreshNeeded$.next();
      })
    );
  }

  public updateSubjectRequest(
    subjectName: string,
    subjectDescription: string,
    subjectId: number
  ): Observable<SubjectI> {
    const body = {
      subjectName,
      subjectDescription,
      subjectId,
    };
    return this.http
      .put<SubjectI>(`${environment.baseUrl}/subjects/${subjectId}`, body)
      .pipe(
        tap(() => {
          this._refreshNeeded$.next();
        })
      );
  }
}
