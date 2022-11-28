import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EmployeeFormModel} from '../models/employee-form.model';

@Injectable()
export class EmployeeFormService {
  constructor(private _httpClient: HttpClient) {
  }

  create(product: Omit<EmployeeFormModel, 'id'>): Observable<EmployeeFormModel> {
    return this._httpClient.post<EmployeeFormModel>('https://dummy.restapiexample.com/create', product);
  }
}
