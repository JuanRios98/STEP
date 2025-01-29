import { Component, Input } from '@angular/core';
import { Cliente } from '../../Modelos/cliente.module';
import { Usuario } from '../../Modelos/usuario.module';
import { Actividad } from '../../Modelos/actividad.module';


@Component({
  selector: 'app-actualizar-actividad',
  templateUrl: './actualizar-actividad.component.html',
  styleUrl: './actualizar-actividad.component.css'
})
export class ActualizarActividadComponent {  
  
  Cliente: Cliente[] =[];

  Usuario: Usuario[]=[];

  @Input() actividad: Actividad | undefined

 

  formatDateLocal(fecha:Date){

  }
}

