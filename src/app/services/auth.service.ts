import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public URL: string = 'http://dtapi.if.ua:8080/signin';

  public constructor(private httpClient: HttpClient, private router: Router) {}

  public login(login: string, password: string) {
    const userData = {
      password,
      username: login,
    };
    return this.httpClient
      .post(this.URL, userData, { observe: 'response' })
      .subscribe(
        (response) => {
          const token: string | null = response.headers.get('authorization');
          localStorage.setItem('authToken', token!);
          this.router.navigate(['/dashboard']);
          console.log('Local storage --->', localStorage);
        },
        (error) => console.log(error)
      );
  }
}
