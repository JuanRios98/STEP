import { Component, ElementRef, ViewChild} from '@angular/core';
import { Usuario } from '../../Modelos/usuario.module';
import { Cliente } from '../../Modelos/cliente.module';
import { Actividad } from '../../Modelos/actividad.module';
import { UtilityService } from '../../services/utility.service';
import Swal from 'sweetalert2';
import { ActividadService } from '../../services/actividad.service';

@Component({
  selector: 'app-consultas-actividad',
  templateUrl: './consultas-actividad.component.html',
  styleUrl: './consultas-actividad.component.css'
})
export class ConsultasActividadComponent {

  actividad: Actividad[]=[]

  @ViewChild('IdmodalCA') Modal: ElementRef | undefined;
  @ViewChild('IdmodalAC') Modal2: ElementRef | undefined;

  isNew: Boolean = false;
  isNew1: boolean = false;
  ActividadSeleccionada: Actividad | undefined=undefined;

  constructor(private _util:UtilityService, private _actividadService: ActividadService){
  this.LoadActividad()
  }

  LoadActividad(){
    this._actividadService.GetActividad()
    .subscribe((rs)=>{
      this.actividad= rs
    })
  }

  EditarActividad(actividad: Actividad){
    this.isNew= false
    this.ActividadSeleccionada = actividad
    this._util.AbrirModal(this.Modal2)
  }

  NuevaActividad(){
    this.isNew=true
    this.ActividadSeleccionada = {id:0,nit:0,proyectoId:0,usuarioId:0,actividad:"",fechaInicio: new Date(),fechaFin: new Date(),estado:0,fechaRealCierre: new Date()}
    this._util.AbrirModal(this.Modal)
  }

  GuardarActividad(){
    if(this.isNew){
    this._actividadService.PostActividad(this.ActividadSeleccionada!)
    .subscribe((rs)=>{
      this.ActividadSeleccionada = undefined;
      this._util.CerrarModal(this.Modal)
      this.LoadActividad()
    })}else {
      this.ActividadSeleccionada= undefined;
      this._util.CerrarModal(this.Modal)
    }}
  

    GuardarActividadEditar(){
      if(this.isNew1){
        this.actividad.push(this.ActividadSeleccionada!);
        this.ActividadSeleccionada = undefined;
        this._util.CerrarModal(this.Modal2)
      }
      else{
        this.ActividadSeleccionada = undefined;
        this._util.CerrarModal(this.Modal2)
      }
    }

  EliminarActividad(Elim: Actividad){
    Swal.fire({
      icon:'question',
      title: `Seguro que deseas eliminar la actividad ${Elim.actividad}`,
      confirmButtonText: 'Guardar',
      cancelButtonText: 'Cancelar',
      showCancelButton: true,
      showConfirmButton: true,
      reverseButtons: true,
      allowOutsideClick: false,
      customClass:{
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger me-1'
      }
    }).then(rs=>{
      if(rs.isConfirmed){
        this._actividadService.DeleteActividad(Elim.id)
        .subscribe((rs)=>{
          this.ActividadSeleccionada= undefined;
          this._util.CerrarModal(this.Modal);
          this.LoadActividad();
        })
        Swal.fire({
          icon: 'success',
          title:`La Actividad ${Elim.actividad} fue eliminada correctamente`
        })}else{
          Swal.fire({
            icon: 'error',
            title: 'No fue posible eliminar la actividad'
          })
        }

    })}
}
