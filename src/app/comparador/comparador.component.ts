import { Component } from '@angular/core';
import { Producto } from '../model/Producto';
import { ComparadorService } from '../service/comparador.service';


@Component({
  selector: 'app-comparador',
  templateUrl: './comparador.component.html',
  styleUrls: ['./comparador.component.css']
})
export class ComparadorComponent {
  productos: Producto[] = [];
  cols: any;
  searchNombre: string = '';
  filteredProducts: Producto[] = [];


  selectProduct(producto: Producto) {
    this.searchNombre = producto.prod_nombre.toString(); 
    this.filteredProducts = []; 
  }
  

  constructor(private comparadorService: ComparadorService) {
  }

  searchProductById() {
    this.comparadorService.getProductoByNombre(this.searchNombre)
      .subscribe(
        (response) => {
          if (Array.isArray(response)) {
            this.productos = response;
          } else {
            this.productos = []; // Si response no es un array válido, asigna un array vacío
          }
        },
        (error) => {
          console.log('Error al buscar el producto:', error);
        }
      );
  }
  
  

  ngOnInit() {
    this.searchProductById();
    this.cols = [
      { field: "prod_nombre", header: "Nombre" },
      { field: "marca_nombre", header: "Marca" },
      { field: "cat_nombre", header: "Categoria" },
      { field: "prov_foto", header: "Proveedor" },
      { field: "precio", header: "Precio" },
      { field: "prod_foto", header: "Foto" },
      { field: "prod_url", header: "Url" }
    ];
  }
}
