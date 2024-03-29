import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  baseUrl:String="http://localhost:8080/producto" 

  constructor(private http:HttpClient) { }
getAll(): Observable<any>{
  return this.http.get(this.baseUrl + "/lista");
}
}
