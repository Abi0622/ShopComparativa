import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { HttpHeaders } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ProductoComponent } from './producto/producto.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ComparadorComponent } from './comparador/comparador.component';

import { TecnologiaComponent } from './producto/tecnologia/tecnologia.component';

import { ElectrohogarComponent } from './producto/electrohogar/electrohogar.component';
import { HomeComponent } from './producto/home/home.component';
import { NosotrosComponent } from './producto/nosotros/nosotros.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    ProveedorComponent,
    ComparadorComponent,
    TecnologiaComponent,
    ElectrohogarComponent,
    HomeComponent,
    NosotrosComponent,
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    AutoCompleteModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    FormsModule,
    TableModule,
    HttpClientModule,
    PanelModule,
    ButtonModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
