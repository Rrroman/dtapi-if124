import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IMarkTypes } from '../../interfaces/mark-type.interface';

@Injectable({
  providedIn: 'root',
})
export class MarkTypesService {
  public constructor(private http: HttpClient) {}

  public getMarkTypes(): Observable<IMarkTypes[]> {
    return this.http
      .get<Array<IMarkTypes>>('http://dtapi.if.ua:8080/mark_types')
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }
}
