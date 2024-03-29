import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ProductModelServer } from 'src/app/models/product.model';
import { ServerResponse } from 'src/app/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: ProductModelServer[] = [];  

  constructor(private productService:ProductService,
              private router: Router) { }
  
  ngOnInit(): void {
    /*
    this.productService.getAllProducts().subscribe((prods: ServerResponse)=> {
      this.products=prods.products;
      
    })
    */
  }
  
  selectProduct(id:Number){
    this.router.navigate(['/product',id]).then();
  }

}
