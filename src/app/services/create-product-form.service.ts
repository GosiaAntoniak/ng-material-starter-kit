import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CreateProductFormModel} from '../models/create-product-form.model';
import {ProductModel} from "../models/product.model";

@Injectable()
export class CreateProductFormService {
  constructor(private _httpClient: HttpClient) {
  }

  create(product: Omit<ProductModel, 'id'>): Observable<CreateProductFormModel> {
    return this._httpClient.post<ProductModel>('https://fakestoreapi.com/products', product);
  }
}
