import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../service/proveedor.service';
import { Proveedor } from '../model/Proveedor';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {
  proveedores: Proveedor[] = [];

  constructor(private proveedorService: ProveedorService) {}

  ngOnInit() {
    this.getAllProveedores();
  }

  getAllProveedores() {
    this.proveedorService.getAll().subscribe(
      (data: Proveedor[]) => {
        this.proveedores = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
