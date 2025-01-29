import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { Dropdown } from 'bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

@ViewChild('Nav') Nav: ElementRef | undefined;

Toogle(){
  if(this.Nav){
    Dropdown.getOrCreateInstance(this.Nav.nativeElement).toggle();
  }
}

CerrarToogle(){
  if(this.Nav){
    Dropdown.getOrCreateInstance(this.Nav.nativeElement).hide();
  }
}

}



