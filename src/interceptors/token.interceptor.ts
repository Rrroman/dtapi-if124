import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private getToken(): any {
    return localStorage.getItem('authToken');
  }

  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.getToken()) {
      request = request.clone({
        setHeaders: {
          Authorization: this.getToken(),
        },
      });
    }

    return next.handle(request);
  }
}
