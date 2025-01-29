import { Component, Input } from '@angular/core';
import { Usuario } from '../../Modelos/usuario.module';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-ca-usuario',
  templateUrl: './ca-usuario.component.html',
  styleUrl: './ca-usuario.component.css'
})
export class CaUsuarioComponent {

  @Input() usuario: Usuario | undefined;

  
  constructor(private _UsuarioService: UsuarioService){

  }

 
}
