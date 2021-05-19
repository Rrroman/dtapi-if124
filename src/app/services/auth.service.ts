import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public URL: string = 'http://dtapi.if.ua:8080/signin';

  public constructor(private httpClient: HttpClient) {}

  public login(login: string, password: string) {
    const userData = {
      password,
      username: login,
    };
    return this.httpClient
      .post(this.URL, userData, { observe: 'response' })
      .subscribe(
        (response) => {
          // const keys = response.headers.keys();
          // const headers = keys.map(key =>
          //   `${key}: ${response.headers.get(key)}`
          //   );
          const token = response.headers.get('authorization');
          localStorage.setItem('authToken', JSON.stringify(token));
          console.log('Local storage --->', localStorage);
        },
        (error) => console.log(error)
      );
  }
}
