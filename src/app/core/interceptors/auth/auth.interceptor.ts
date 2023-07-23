import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { TokenService } from '@services/token/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private serviceToken: TokenService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    try {
      const access_token = this.serviceToken.getToken()

      if(!access_token) {
        return next.handle(request);
      }

      const newRequest = request.clone({
        setHeaders: { authorization: `Bearer ${access_token}` }
      })
      //console.log('TOKEN Interceptor: ', newRequest);
      return next.handle(newRequest)
    } catch (error) {
      console.log('Error ', error)
      return next.handle(request)
    }
  }
}
