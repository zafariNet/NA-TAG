import { NgxSpinnerService } from 'ngx-spinner';
import { dataFetched } from './../app.module';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, tap, map, catchError } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(private spinner: NgxSpinnerService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error) => {
        debugger;
        if (error instanceof HttpErrorResponse) {
          // TODO
          // Error handeling
        }

        return next.handle(request);
      }),
      map((event: HttpEvent<any>) => {
        return event;
      })
    );
  }
}
