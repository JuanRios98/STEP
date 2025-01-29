import { Component, ElementRef, ViewChild,} from '@angular/core';
import { Proyecto } from '../../Modelos/proyecto.module';
import { Modal } from 'bootstrap';
import Swal from 'sweetalert2';
import { UtilityService } from '../../services/utility.service';
import { ProyectoService } from '../../services/proyecto.service';

@Component({
  selector: 'app-consulta-proyecto',
  templateUrl: './consulta-proyecto.component.html',
  styleUrl: './consulta-proyecto.component.css'
})
export class ConsultaProyectoComponent {

proyecto: Proyecto []=[]

@ViewChild('IdmodalP') modal: ElementRef | undefined;
@ViewChild('IdmodalPC') modal1: ElementRef | undefined;

ProyectoSeleccionado: Proyecto | undefined;
IsNew: boolean= false;
IsNewE: boolean = false;

constructor(private _util: UtilityService, private _Proyectoservice: ProyectoService){
this.LoadProyectos()
}


LoadProyectos(){
  this._Proyectoservice.GetProyecto()
  .subscribe((rs)=>{
    this.proyecto = rs
  })
}

EditarProyecto(proyecto : Proyecto){
  this.IsNew= false,
  this.ProyectoSeleccionado = proyecto;
  this._util.AbrirModal(this.modal)
  
}

NuevoProyecto(){
  this.IsNew = true
  this.ProyectoSeleccionado = {id:0,nit:0,nombre:'',fechaInicio: new Date(),fechaFin: new Date(), fechaRealCierre: new Date(), estado: 0}
  this._util.AbrirModal(this.modal1)
  
}

GuardarProyecto(){
  if(this.IsNew){
    this._Proyectoservice.PostProyecto(this.ProyectoSeleccionado!)
    .subscribe((rs)=>{
      this.ProyectoSeleccionado = undefined;
      this._util.CerrarModal(this.modal1);
      this.LoadProyectos();
    })
  }
  else{
    this.ProyectoSeleccionado = undefined;
    this._util.CerrarModal(this.modal1)
  }
}


GuardarProyectoEditar(){
    this._Proyectoservice.PutProyecto(this.ProyectoSeleccionado!)
    .subscribe((rs)=>{
    this.ProyectoSeleccionado= undefined,
    this._util.CerrarModal(this.modal),
    this.LoadProyectos()
    })}


EliminarProyecto(Eliminar: Proyecto){
  Swal.fire({
    title: `Estas seguro que deseas eliminar ${Eliminar.nombre}?`,
    icon: 'question',
    showCancelButton: true,
    showConfirmButton: true,
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Confirmar',
    allowOutsideClick: false,
    reverseButtons: true,
    customClass:{
      cancelButton: 'btn btn-primary',
      confirmButton:'btn btn-danger me-1'
    }}).then(rs=>{
      if(rs.isConfirmed){
        this._Proyectoservice.DeleteProyecto(Eliminar.id)
        .subscribe((rs)=>{
          this.LoadProyectos()
        })
        Swal.fire({
          title: `Proyecto ${Eliminar.nombre} fue eliminado correctamente`,
          icon: 'success'
        })}
    })}

}
