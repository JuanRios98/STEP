import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'usuario',
    loadChildren: ()=> import('./usuario/usuario.module').then(m => m.UsuarioModule)
  },
  {
    path: 'home',
    loadChildren: ()=> import('./home/home.module').then(h => h.HomeModule)
  },
  {
    path: 'cliente',
    loadChildren: ()=> import('./cliente/cliente.module').then(c => c.ClienteModule)
  },
  {
    path:'actividad',
    loadChildren:()=> import('./actividad/actividad.module').then(a => a.ActividadModule)
  },
  {
    path:'recurso',
    loadChildren:()=> import('./recurso/recurso.module').then(r => r.RecursoModule)
  },
  {
    path: 'proyecto',
    loadChildren: ()=> import('./proyecto/proyecto.module').then(p => p.ProyectoModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
