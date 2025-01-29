import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarclienteComponent } from './mostrarcliente/mostrarcliente.component';
import { AppRoutingModule } from '../app-routing.module';
import { Router, RouterModule, Routes } from '@angular/router';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import { ActualizarClienteComponent } from './actualizar-cliente/actualizar-cliente.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DireccionModule } from '../direccion/direccion.module';
import { FormsModule } from '@angular/forms';

const ROUTES: Routes = [
  {
    path: '',
    component: MostrarclienteComponent
  },
  {
    path: 'agregar',
    component: AgregarClienteComponent
  },
  {
    path: 'actualizar',
    component: ActualizarClienteComponent
  },


]

@NgModule({
  declarations: [
    MostrarclienteComponent,
    AgregarClienteComponent,
    ActualizarClienteComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    NgxPaginationModule,
    DireccionModule,
    FormsModule
  ],
  exports: [
    ActualizarClienteComponent,
    AgregarClienteComponent,
    MostrarclienteComponent

  ]
})
export class ClienteModule { }
