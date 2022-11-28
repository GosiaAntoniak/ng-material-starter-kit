import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginFormModel} from '../models/login-form.model';

@Injectable()
export class LoginFormService {
  constructor(private _httpClient: HttpClient) {
  }

  create(loginFormData: LoginFormModel): Observable<{ token: string }> {
    return this._httpClient.post<{ token: string }>('https://fakestoreapi.com/auth/login', loginFormData);
  }
}
