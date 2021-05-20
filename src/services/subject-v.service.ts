import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SubjectVService {
  public constructor(private httpClient: HttpClient) {}

  public getSubjects(): Observable<any> {
    return this.httpClient
      .get('http://dtapi.if.ua:8080/subjects', {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsIlJvbGVzIjp7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifSwiZXhwIjoxNjIxNDM5OTA4LCJpYXQiOjE2MjE0MzI2MzUsImp0aSI6IjI0In0.B-QrS_MXFSBka_dxfXOgSxAzut81G6JH4sF6OSrgzoIH5Vms8aOGTzSGCRVycKI5AQPPprruGmBiIMuY6IcY1Q',
        },
      })
      .pipe(
        map((res: any) => {
          return res.data;
        })
      );
  }
}
