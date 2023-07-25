import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Proveedor',
        routerLink: '/proveedor',
      },
      {
        label: 'Productos',
        routerLink: '/producto',
      },
      {
        label: 'Categorías',
        items: [
          {
            label: 'TECNOLOGIA',
            routerLink: '/producto/tecnologia',
          },

          {
            label: 'ELECTROHOGAR ',
            routerLink: '/producto/electrohogar',
          },
        ],
      },
      {
        label: 'Comparador',
        routerLink: '/comparador',
      },
      {
        label: 'home',
        routerLink: '/home',
      },
      {
        label: 'nosotros',
        routerLink: '/nosotros',
      },

    ];
  }
  title = 'ShopComparativa';
}
