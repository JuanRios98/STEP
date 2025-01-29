import { Component, NgModule, createComponent } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultasActividadComponent } from './consultas-actividad/consultas-actividad.component';
import { RouterModule, Routes } from '@angular/router';
import { CrearActividadComponent } from './crear-actividad/crear-actividad.component';
import { ActualizarActividadComponent } from './actualizar-actividad/actualizar-actividad.component';
import { FormsModule } from '@angular/forms';


const ROUTES: Routes =[
  {
    path:'',
    component: ConsultasActividadComponent,
  },
  {
    path:'crear',
    component: CrearActividadComponent,
  },
  {
    path:'actualizar',
    component: ActualizarActividadComponent,
  }
 
]


@NgModule({
  declarations: [
    ConsultasActividadComponent,
    CrearActividadComponent,
    ActualizarActividadComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule
  ]
})
export class ActividadModule { }
