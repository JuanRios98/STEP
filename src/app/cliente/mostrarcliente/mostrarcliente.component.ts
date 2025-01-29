import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { Cliente } from '../../Modelos/cliente.module';
import Swal from 'sweetalert2';
import { Direccion } from '../../Modelos/direccion.module';
import { UtilityService } from '../../services/utility.service';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-mostrarcliente',
    templateUrl: './mostrarcliente.component.html',
    styleUrl: './mostrarcliente.component.css'
})

export class MostrarclienteComponent {
  pagina: number=1;
  
  Cliente: Cliente[] =[]

  @ViewChild("Idmodal") modal : ElementRef | undefined;
  @ViewChild('Idmodal2') modal2: ElementRef | undefined;
  clienteSeleccionado: Cliente | undefined = undefined;
  DireccionSeleccionada: Direccion | undefined =undefined;
  isNew: boolean= false;
  isNew2: boolean= false;

  constructor(private _util: UtilityService, private _clienteService: ClienteService){
    this.LoadCliente()
  }


  LoadCliente(){
    this._clienteService.GetCliente()
    .subscribe((rs)=>{
      this.Cliente= rs
    })
  }
 
  EditarCliente(cliente: Cliente){
     this.isNew= false;
    this.clienteSeleccionado= cliente ; 
    this._util.AbrirModal(this.modal2)
  }

  NuevoCliente(){
    this.isNew= true;
    this.clienteSeleccionado={nit:0,nombre:"",nombreContacto:"",direccion:[],contacto:"",estado:0};  
    this._util.AbrirModal(this.modal)
  }

  GuardarCliente(){
   if (this.isNew){
    this._clienteService.PostCliente(this.clienteSeleccionado!)
    .subscribe((rs)=>{
      this.clienteSeleccionado = undefined;
      this._util.CerrarModal(this.modal)
      this.LoadCliente();
    })
   }
   else
   {
    this.clienteSeleccionado = undefined;
    this._util.CerrarModal(this.modal)
   }
  }
   
   GuardarClienteEditar(){
      this._clienteService.PutCliente(this.clienteSeleccionado!)
      .subscribe((rs)=>{
        this.clienteSeleccionado = undefined;
        this._util.CerrarModal(this.modal2);
        this.LoadCliente();
        Swal.fire({
          title: `El cliente fue actualizado correctamente` 
        })
      })
    }
   



   EliminarCliente(Elicliente: Cliente) {
    Swal.fire({
      title: `Estas seguro que deseas eliminar el cliente ${Elicliente.nombre}?`,
      icon: 'question',
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Confirmar',
      allowOutsideClick: false,
      reverseButtons: true,
      customClass:{
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger me-1'
      }}).then(rs=>{
        if(rs.isConfirmed){
          this._clienteService.DeleteCliente(Elicliente.nit)
          .subscribe((rs)=>{
            this.LoadCliente()
          })
          Swal.fire({
            title: `El Cliente ${Elicliente.nombre} fue eliminado correctamente`,
            icon: 'success'
                    })
                  }
                })
              }
} 


//Revisar Modulo