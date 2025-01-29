import { Component, Input } from '@angular/core';
import { Cliente } from '../../Modelos/cliente.module';


@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrl: './agregar-cliente.component.css'
})

export class AgregarClienteComponent {
  
  @Input() Agregarcliente: Cliente | undefined;
  
  
}
