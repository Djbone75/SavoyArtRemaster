import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Store } from 'src/store';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store) {}
  token: string | null = this.store.value.token || null;
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.store.select<string>('token').subscribe((token) => {
      this.token = token;
    });
    const authRequest = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + this.token),
    });
    return next.handle(authRequest);
  }
}
