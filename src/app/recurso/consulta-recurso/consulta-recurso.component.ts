import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { Recurso } from '../../Modelos/recurso.module';
import { Modal } from 'bootstrap';
import Swal from 'sweetalert2';
import { UtilityService } from '../../services/utility.service';
import { RecursoService } from '../../services/recurso.service';


@Component({
  selector: 'app-consulta-recurso',
  templateUrl: './consulta-recurso.component.html',
  styleUrl: './consulta-recurso.component.css'
})
export class ConsultaRecursoComponent {

  recurso: Recurso []=[]

  @ViewChild('IdmodalR') modal: ElementRef | undefined
  IsNew: Boolean = false;
  IsLoding= true;
  RecursoSeleccionado: Recurso | undefined = undefined;

  constructor(private _recursoService: RecursoService , private _util: UtilityService){
   this.LoadRecursos();
  }
  
  LoadRecursos(){
    this._recursoService.getRecursos()
    .subscribe((rs)=>{
      this.recurso = rs
    })
  }

    

  EditarRecurso(recurso: Recurso){
    this.IsNew= false,
    this.RecursoSeleccionado = recurso;
    this._util.AbrirModal(this.modal)
   
  }

  NuevoRecurso(){
    this.IsNew= true,
    this.RecursoSeleccionado = {id:0,nombre:'',cantidad:0};
    this._util.AbrirModal(this.modal)
    
  }

  GuardarRecurso(){
    if (this.IsNew){
        this._recursoService.PostRecurso(this.RecursoSeleccionado!)
        .subscribe((rs)=>{
        this.RecursoSeleccionado = undefined;
        this._util.CerrarModal(this.modal)
        this.LoadRecursos();
      })
    }else{
      this._recursoService.PutRecurso(this.RecursoSeleccionado!)
      .subscribe((rs)=>{
        this.RecursoSeleccionado = undefined;
        this._util.CerrarModal(this.modal);
        this.LoadRecursos();
        Swal.fire({
          icon: 'success',
          title: `El recurso ${this.RecursoSeleccionado} fue actualizado correctamente`
        })

      })
    }
    }

  EliminarRecurso(re: Recurso){
    Swal.fire({
      title: `Estas seguro que deseas eliminar el recurso ${re.nombre}`,
      icon:'question',
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonAriaLabel: 'Cancelar',
      confirmButtonAriaLabel: 'Confirmar',
      allowOutsideClick: false,
      reverseButtons: true,
      customClass:{
        confirmButton:'btn btn-primary',
        cancelButton: 'btn btn-danger me-1'
      }}).then(rs =>{
        if(rs.isConfirmed){
          this._recursoService.DeleteRecurso(re.id).subscribe((rs)=>{
          this.LoadRecursos()
          })
          Swal.fire({
          title:`Recurso ${re.nombre} fe eliminado exitosamente`,
          icon: 'success'})
          
        }
      })}

      }


      


