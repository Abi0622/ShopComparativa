import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: string = "http://localhost:8080/categoria";

  constructor(private http:HttpClient) { }
getAll(): Observable<any>{
  return this.http.get(this.baseUrl + "/lista");
}
}
