import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultarUsuarioComponent } from './consultar-usuario/consultar-usuario.component';
import { RouterModule, Routes } from '@angular/router';
import { CaUsuarioComponent } from './ca-usuario/ca-usuario.component';
import { FormsModule } from '@angular/forms';


const ROUTES : Routes = [
  {
    path:'',
    component: ConsultarUsuarioComponent
  },
  {
    path:"actualizar-ca",
    component: CaUsuarioComponent

  }
];

@NgModule({
  declarations: [
    ConsultarUsuarioComponent,
    CaUsuarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule
  ],
 
})
export class UsuarioModule { }
