import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './producto/producto.component';
import { TecnologiaComponent } from './producto/tecnologia/tecnologia.component';
import { ElectrohogarComponent } from './producto/electrohogar/electrohogar.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ComparadorComponent } from './comparador/comparador.component';
import { HomeComponent } from './producto/home/home.component';
import { NosotrosComponent } from './producto/nosotros/nosotros.component';




const routes: Routes = [
  { path: '',redirectTo:'/producto',pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'producto/tecnologia', component: TecnologiaComponent },
  { path: 'producto/electrohogar', component: ElectrohogarComponent },
  {path: 'proveedor', component: ProveedorComponent},
  {path: 'comparador', component: ComparadorComponent},
  {path: 'home', component: HomeComponent},
  {path: 'nosotros', component: NosotrosComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
