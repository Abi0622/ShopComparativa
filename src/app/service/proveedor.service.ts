import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  baseUrl:String="http://localhost:8080/proveedor" 

  constructor(private http:HttpClient) { }
getAll(): Observable<any>{
  return this.http.get(this.baseUrl + "/lista");
}
}
