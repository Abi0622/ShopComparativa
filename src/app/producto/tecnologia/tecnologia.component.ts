import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Producto } from 'src/app/model/Producto';
import { TecnologiaService } from 'src/app/service/tecnologia.service';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.css']
})
export class TecnologiaComponent implements OnInit{
 
  
  productos: Producto[]=[]; 
  cols: any;
  menuItems: MenuItem[]=[];

  constructor(private tecnologiaService: TecnologiaService) {}

  getAll() {
    this.tecnologiaService.getAll().subscribe(
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


  



