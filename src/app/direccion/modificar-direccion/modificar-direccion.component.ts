import { Component, Input } from '@angular/core';
import { Direccion } from '../../Modelos/direccion.module';

@Component({
  selector: 'app-modificar-direccion',
  templateUrl: './modificar-direccion.component.html',
  styleUrl: './modificar-direccion.component.css'
})
export class ModificarDireccionComponent {
@Input() direccion: Direccion | undefined;



EditarDireccion(){

}

}
