import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, IProduct } from '../modelos/producto.modelo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL='https://fakestoreapi.com/products'

  constructor(private _httpClient: HttpClient) { }

  public getAllProducts(): Observable<IProduct[]>{ //devuelve observable de productos
    return this._httpClient.get<IProduct[]>(`${this.baseURL}`);
  }

  public getProduct(id: number): Observable<IProduct>{ //devuelve observable de 1 producto
    return this._httpClient.get<IProduct>(`${this.baseURL}/${id}`);
  }

  public getAllCategories(): Observable<Category[]>{
    return this._httpClient.get<Category[]>(`${this.baseURL}/categories`); //devuelve observable de categorias
  }

  public newProduct(product: IProduct): Observable<IProduct>{
    return this._httpClient.post<IProduct>(`${this.baseURL}`, product); //*devuelve observable de categorias
  }

  public updateProduct(id: number, product: IProduct): Observable<IProduct>{
    return this._httpClient.put<IProduct>(`${this.baseURL}/${id}`, product); //*devuelve observable de categorias
  }

  public deleteProduct(id: number): Observable<IProduct>{
    return this._httpClient.delete<IProduct>(`${this.baseURL}/${id}`); //*devuelve observable de categorias
  }

}

// _http... = significa que esta inyectando componentes 
