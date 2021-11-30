import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  SERVER_URL= environment.SERVER_URL;

  constructor(private http: HttpClient) { }

  getAllProducts(numberOfResults: number = 10){
    return this.http.get(this.SERVER_URL+ '/products', options{
      params: {
        limit: numberOfResults.toString();
      }
    })
  }
}
