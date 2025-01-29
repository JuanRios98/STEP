import { Component, Input, input } from '@angular/core';
import { Proyecto } from '../../Modelos/proyecto.module';
import {format} from 'date-fns-tz'

@Component({
  selector: 'app-actualizar-proyecto',
  templateUrl: './actualizar-proyecto.component.html',
  styleUrl: './actualizar-proyecto.component.css'
})
export class ActualizarProyectoComponent {

  @Input() proyecto: Proyecto | undefined

  Formatofechalocalproyecto(fecha: Date){
    if (!fecha) {
      fecha = new Date();
    }
    let fechaFormateada= format(fecha,"yyyy-MM-dd'T'HH:mm",{timeZone: "America/Bogota"})
    return fechaFormateada
  }

  
  //metodo para actualizar la fecha
  UpdateDate(value: string, field: string) {
 
    this.setProperty(this.proyecto!, field as keyof Proyecto, new Date(value))
  }
 
  setProperty<T extends keyof Proyecto>(obj: Proyecto, key: T, value: Proyecto[T]): void {
    obj[key] = value; //Reflection
  }
}

