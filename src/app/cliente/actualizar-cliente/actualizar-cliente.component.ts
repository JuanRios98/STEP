import { Component, Input, input } from '@angular/core';
import { Direccion } from '../../Modelos/direccion.module';
import { Cliente } from '../../Modelos/cliente.module';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrl: './actualizar-cliente.component.css'
})
export class ActualizarClienteComponent {

@Input() cliente: Cliente | undefined;

Direccion: Direccion []=[];

DireccionSeleccionada: Direccion | undefined =undefined;
isNew3: Boolean= false;



}
