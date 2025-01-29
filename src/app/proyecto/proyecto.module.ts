import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaProyectoComponent } from './consulta-proyecto/consulta-proyecto.component';
import { RouterModule, Routes } from '@angular/router';
import { CrearProyectoComponent } from './crear-proyecto/crear-proyecto.component';
import { ActualizarProyectoComponent } from './actualizar-proyecto/actualizar-proyecto.component';
import { FormsModule } from '@angular/forms';

const ROUTES : Routes =[
  {
  path: '',
  component: ConsultaProyectoComponent
  },
  {
    path: 'c',
    component: CrearProyectoComponent
  },
  {
    path: 'a',
    component: ActualizarProyectoComponent
  }
]

@NgModule({
  declarations: [
    ConsultaProyectoComponent,
    CrearProyectoComponent,
    ActualizarProyectoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule
  ]
})
export class ProyectoModule { }
