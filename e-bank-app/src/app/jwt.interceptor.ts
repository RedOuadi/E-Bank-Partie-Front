import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { JwtService } from '../app/services/jwt.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private jwtService: JwtService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('jwt');

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request).pipe(
      catchError(err => {
        if (err.status === 403) {
          const refreshToken = localStorage.getItem('refreshToken');
          if (refreshToken) {
            return this.jwtService.refreshToken(refreshToken).pipe(
              switchMap((newToken: any) => {
                localStorage.setItem('jwt', newToken.accessToken);
                request = request.clone({
                  setHeaders: {
                    Authorization: `Bearer ${newToken.accessToken}`
                  }
                });
                return next.handle(request);
              }),
              catchError(error => {
                this.jwtService.logout();
                return throwError(error);
              })
            );
          }
        }
        return throwError(err);
      })
    );
  }
}
