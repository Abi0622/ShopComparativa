import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {

  baseUrl:String="http://localhost:8080/producto" 

  constructor(private http:HttpClient) { }
getAll(): Observable<any>{
  return this.http.get(this.baseUrl + "/Tecnologia");
}
}
