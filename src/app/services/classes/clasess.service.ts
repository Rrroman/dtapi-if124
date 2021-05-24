import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IClasses, IClassesCreate, IClassesEdit } from '../../interfaces/classes'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ClasessService {

  constructor(private http: HttpClient) { }

  public getClassesList(): Observable<IClasses[]> {
    return this.http.get<IClasses>(`${environment.baseUrl}/classes`)
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }

  public createClass(classItem: IClassesCreate): Observable<IClasses[]> {
    return this.http.post<IClasses[]>(`${environment.baseUrl}/classes`, classItem);
  }

  public editClass(classItem: IClassesEdit): Observable<IClasses[]> {
    return this.http.put<IClasses[]>(`${environment.baseUrl}/classes/${classItem.id}`, classItem);
  }

}
