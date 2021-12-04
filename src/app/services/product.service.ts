import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { ProductModelServer, ServerResponse } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url= environment.SERVER_URL;

  constructor(private http: HttpClient) { }
  
  getAllProducts(limitOfResults=10): Observable<ServerResponse> {
    return this.http.get<ServerResponse>(this.url + 'products', {
      params: {
        limit: limitOfResults.toString()
      }
    });
  }
  
  /* this is to fetch all products from the backend server*/

  getSingleProduct(id: Number): Observable<ProductModelServer> {
    return this.http.get<ProductModelServer>(this.url + 'products/' + id);
  }

  getProductsFromCategory(catName: String): Observable<ProductModelServer[]> {
    return this.http.get<ProductModelServer[]>(this.url + 'products/category/' + catName);
  }

}
