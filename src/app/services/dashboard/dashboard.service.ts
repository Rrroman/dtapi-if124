import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  public uri = 'http://dtapi.if.ua:8080/';

  public constructor(private httpClient: HttpClient) {}

  public getClasses(): Observable<any> {
    return this.httpClient.get(`${this.uri}classes`);
  }

  public getSubjects(): Observable<any> {
    return this.httpClient.get(`${this.uri}subjects`);
  }

  public getTeachers(): Observable<any> {
    return this.httpClient.get(`${this.uri}teachers`);
  }

  public getMarkTypes(): Observable<any> {
    return this.httpClient.get(`${this.uri}mark_types`);
  }
}
