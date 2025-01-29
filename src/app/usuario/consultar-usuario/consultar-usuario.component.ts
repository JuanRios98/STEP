import { Component, ElementRef, ViewChild,} from '@angular/core';
import { Usuario } from '../../Modelos/usuario.module';
import Swal from 'sweetalert2';
import { Modal } from 'bootstrap';
import { UsuarioService } from '../../services/usuario.service';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-consultar-usuario',
  templateUrl:'./consultar-usuario.component.html',
  styleUrl: './consultar-usuario.component.css'
})
export class ConsultarUsuarioComponent {
  pagina: number=1;
  Usuario: Usuario[]=[]

@ViewChild('IdmodalU') modal: ElementRef | undefined;
isNew: boolean = false;
IsLoding= true;
UsuarioSeleccionado: Usuario | undefined= undefined;

constructor(private _usuarioService: UsuarioService, private _util: UtilityService){
this.LoadUsuario();
}

LoadUsuario(){
  this._usuarioService.getUsuarios()
  .subscribe((rs)=>{
    this.Usuario = rs
  })}

EditarUsuario(usuario: Usuario){
this.isNew= false;  
this.UsuarioSeleccionado= usuario;
this._util.AbrirModal(this.modal)
}

NuevoUsuario(){
 this.isNew=true;
 this.UsuarioSeleccionado={id:0,nombre:"",apellido:"",documento:0,estado:0 }
 this._util.AbrirModal(this.modal)
 
}

GuardarUsuario(){
if(this.isNew){
    this._usuarioService.PostUsuario(this.UsuarioSeleccionado!).subscribe((rs)=>
    { this.UsuarioSeleccionado=undefined;
    this._util.CerrarModal(this.modal);
    this.LoadUsuario();
  });
}else{
    this._usuarioService.PutUsuario(this.UsuarioSeleccionado!).subscribe((rs)=>{
    this.UsuarioSeleccionado = undefined;
    this._util.CerrarModal(this.modal);
    this.LoadUsuario();
    Swal.fire({
      icon: 'success',
      title: `El usuario ${this.UsuarioSeleccionado} ha sido actualizado correctamente`
    })
  })

}}

EliminarUsuario(Us: Usuario){
  Swal.fire({
    icon: 'question',
    title: `Seguro que deseas eliminar el Usuario ${Us.nombre}`,
    showCancelButton: true,
    showConfirmButton: true,
    allowOutsideClick: false,
    reverseButtons: true,
    customClass:{
      confirmButton: 'btn btn-primary',
      cancelButton: 'btn btn-danger me-1'
  }}).then(rs=>{
    if(rs.isConfirmed){
      this._usuarioService.DeleteUsuario(Us.id)
      .subscribe((r)=>{
        this.LoadUsuario()
      })
      
      Swal.fire({
        icon: 'success',
        title: `El usuario ${Us.nombre} fue eliminado exitosamente`
      })}
    })
  }
  
}





