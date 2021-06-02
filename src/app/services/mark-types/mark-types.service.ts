import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IMarkTypes } from '../../interfaces/mark-type.interface';

@Injectable({
  providedIn: 'root',
})
export class MarkTypesService {
  public constructor(private http: HttpClient) {}

  public getMarkTypes(): Observable<IMarkTypes[]> {
    return this.http
      .get<Array<IMarkTypes>>(`${environment.baseUrl}/mark_types`)
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }

  public editMarkTypes(markTypes: IMarkTypes): Observable<any> {
    const body = {
      markType: markTypes.markType,
      description: markTypes.description,
    };
    return this.http.put(
      `${environment.baseUrl}/mark_types/${markTypes.id}`,
      body
    );
  }
}
