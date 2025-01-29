import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NuevaDireccionComponent } from './nueva-direccion/nueva-direccion.component';
import { ModificarDireccionComponent } from './modificar-direccion/modificar-direccion.component';
import { MostrarDireccionComponent } from './mostrar-direccion/mostrar-direccion.component';
import { FormsModule } from '@angular/forms';
import { ClienteModule } from '../cliente/cliente.module';


const ROUTES: Routes = [
{
  path: 'nuevadire',
  component: NuevaDireccionComponent
},
{
  path: 'modifdire',
  component: ModificarDireccionComponent
},

]


@NgModule({
  declarations: [
    NuevaDireccionComponent,
    ModificarDireccionComponent,
    MostrarDireccionComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule,
    
  ],
  exports: [
    NuevaDireccionComponent,
    ModificarDireccionComponent,
    
    
  ]

})
export class DireccionModule { }
