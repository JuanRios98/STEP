import { ElementRef, Injectable } from '@angular/core';
import { Modal } from 'bootstrap';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(){ }


  AbrirModal(Abrir: ElementRef | undefined){
    if(Abrir){
      Modal.getOrCreateInstance(Abrir.nativeElement).show()
    }
  }

  CerrarModal(CierreM: ElementRef | undefined){
    if(CierreM){
      let ocultar= Modal.getInstance(CierreM.nativeElement)
      ocultar?.hide();}
  
      let backdrop = document.querySelector('.modal-backdrop.fade.show')
    
      if (backdrop){
      backdrop.parentNode?.removeChild(backdrop)}
   
      document.body.removeAttribute("style")
      document.body.removeAttribute("class")
    }
}
