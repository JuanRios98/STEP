import { Component, Input } from '@angular/core';
import { Proyecto } from '../../Modelos/proyecto.module';
import { format } from 'date-fns-tz';

@Component({
  selector: 'app-crear-proyecto',
  templateUrl: './crear-proyecto.component.html',
  styleUrl: './crear-proyecto.component.css'
})
export class CrearProyectoComponent {

  @Input() AggProyecto: Proyecto | undefined

  Formatofechalocalproyecto(fecha: Date){
    if (!fecha) {
      fecha = new Date();
    }
    let fechaFormateada = format(fecha,"yyyy-MM-dd'T'HH:mm",{timeZone: "America/Bogota"})
    return fechaFormateada
  }

  
  //metodo para actualizar la fecha
  UpdateDate(value: string, field: string) {
 
    this.setProperty(this.AggProyecto!, field as keyof Proyecto, new Date(value))
  }
 
  setProperty<T extends keyof Proyecto>(obj: Proyecto, key: T, value: Proyecto[T]): void {
    obj[key] = value; //Reflection
  }
  
}
