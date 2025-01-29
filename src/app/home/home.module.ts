import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

const ROUTES: Routes = [
  {
    path: 'PaginaPrincipal',
    component: PaginaPrincipalComponent
  }
]

@NgModule({
  declarations: [
    PaginaPrincipalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class HomeModule { }
