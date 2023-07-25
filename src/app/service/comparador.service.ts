import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../model/Producto';

@Injectable({
  providedIn: 'root'
})
export class ComparadorService {

  baseUrl: string = "http://localhost:8080/producto";

  constructor(private http: HttpClient) { }

  getProductoByNombre(nombre: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.baseUrl}/nombre/${nombre}`);
  }
  
}
