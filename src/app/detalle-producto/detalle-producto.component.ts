import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProduct } from '../modelos/producto.modelo';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit{

  producto?: IProduct;
  loading: boolean=true;
  color: string = '';

  constructor( 
    private _route: ActivatedRoute,
    private _apiService: ApiService
    ){}

  ngOnInit(): void {
       this._route.params.subscribe({
        next: (params : Params) =>{
          this._apiService.getProduct(Number(params['productosId'])).subscribe({
          next: (data: IProduct) =>{
          this.producto = data
          this.color = this.producto?.price as number >200 ? 'red' : ''   
          this.loading = false
        },
          error: (error: any) => {
            console.log(error);
            this.loading = false;
          }
          })                  
        },
        error: (error: any) => {
          console.log(error);
      }      
  })
}
}

