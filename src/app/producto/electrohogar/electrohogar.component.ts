import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/Producto';
import { ElectrohogarService } from 'src/app/service/electrohogar.service';

@Component({
  selector: 'app-electrohogar',
  templateUrl: './electrohogar.component.html',
  styleUrls: ['./electrohogar.component.css']
})
export class ElectrohogarComponent implements OnInit {
  
  productos: Producto[]=[]; 
  cols: any;

  constructor(private electrohogarService: ElectrohogarService) {}

  getAll() {
    this.electrohogarService.getAll().subscribe(
      (result: any) => {
        let productos: Producto[] = [];
        for(let i=0; i<result.length; i++){
          let producto = result[i] as Producto; 
          productos.push(producto);
        }
         this.productos=productos;
      },
      error => {
        console.log(error);
      }
    );
  }
  ngOnInit() {
    this.getAll();
    this.cols = [
      { field: "prod_nombre", header: "Nombre" },
      { field: "marca_nombre", header: "Marca" },
      { field: "categoria.cat_nombre", header: "Categoria" },
      { field: "proveedor.prov_foto", header: "Proveedor" },
      { field: "precio", header: "Precio" },
      { field: "prod_foto", header: "Foto" },
      { field: "prod_url", header: "Url" }
    ];
  }
  favProducto(){}
}


