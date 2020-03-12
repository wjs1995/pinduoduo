import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()
export class NotificationInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap((event:  HttpEvent<any>) => {
        if (event instanceof HttpResponse && event.status >= 200 && event.status <= 300) {
          console.log('假装弹出toast，请求成功')
        }
      })
    );
  }
}
