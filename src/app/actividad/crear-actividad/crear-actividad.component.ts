import { Component, ElementRef, Input } from '@angular/core';
import { Usuario } from '../../Modelos/usuario.module';
import { Cliente } from '../../Modelos/cliente.module';
import { Actividad } from '../../Modelos/actividad.module';
import { Proyecto } from '../../Modelos/proyecto.module';
import { format } from 'date-fns-tz';

@Component({
  selector: 'app-crear-actividad',
  templateUrl: './crear-actividad.component.html',
  styleUrl: './crear-actividad.component.css'
})
export class CrearActividadComponent {

  @Input() actividad: Actividad | undefined;

  Formatofechalocalproyecto(fecha: Date){
    if (!fecha) {
      fecha = new Date();
    }
    let fechaFormateada = format(fecha,"yyyy-MM-dd'T'HH:mm",{timeZone: "America/Bogota"})
    return fechaFormateada
  }

  
  //metodo para actualizar la fecha
  UpdateDate(value: string, field: string) {
 
    this.setProperty(this.actividad!, field as keyof Actividad, new Date(value))
  }
 
  setProperty<T extends keyof Actividad>(obj: Actividad, key: T, value: Actividad[T]): void {
    obj[key] = value; //Reflection
  }



}
