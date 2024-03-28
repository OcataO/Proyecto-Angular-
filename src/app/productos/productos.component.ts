import { Component, OnInit } from '@angular/core';
import { IProduct } from '../modelos/producto.modelo';
import { ApiService } from '../servicios/api.service';
import { productsList } from './productos.mock';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{

  productsList: IProduct[] = [];

  constructor(private _apiService: ApiService){}

  ngOnInit(): void {
      this._apiService.getAllProducts().subscribe((data: IProduct[]) => {
        this.productsList = data;
      })
  }

}
