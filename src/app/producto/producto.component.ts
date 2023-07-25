import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/Producto';
import { Proveedor } from '../model/Proveedor';
import { ProductoService } from '../service/producto.service';
import { ProveedorService } from '../service/proveedor.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos: Producto[] = [];
  cols: any;
  menuItems: MenuItem[]=[];

  constructor(private productoService: ProductoService, private proveedorService:ProveedorService) {}

  getAll() {
    this.productoService.getAll().subscribe(
      (result: any) => {
        this.productos = result as Producto[];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.getAll();

    this.cols = [
      { field: 'prod_nombre', header: 'Nombre' },
      { field: 'marca_nombre', header: 'Marca' },
      { field: 'categoria.cat_nombre', header: 'Categoría' },
      { field: 'proveedor.prov_foto', header: 'Proveedor' },
      { field: 'precio', header: 'Precio' },
      { field: 'prod_foto', header: 'Foto' },
      { field: 'prod_url', header: 'URL' }
    ];

  }
  favProducto(){};
  

  }

