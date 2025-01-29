import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaRecursoComponent } from './consulta-recurso/consulta-recurso.component';
import { RouterModule, Routes } from '@angular/router';
import { CaRecursoComponent } from './ca-recurso/ca-recurso.component';
import { FormsModule } from '@angular/forms';

const ROUTES: Routes=[
  { 
    path:'',
    component: ConsultaRecursoComponent
  },
  {
    path:'ca-recurso',
    component: CaRecursoComponent
  }
]

@NgModule({
  declarations: [
    ConsultaRecursoComponent,
    CaRecursoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule
  ]
})
export class RecursoModule { }
