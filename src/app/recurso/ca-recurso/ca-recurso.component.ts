import { Component, Input, input } from '@angular/core';
import { Recurso } from '../../Modelos/recurso.module';

@Component({
  selector: 'app-ca-recurso',
  templateUrl: './ca-recurso.component.html',
  styleUrl: './ca-recurso.component.css'
})
export class CaRecursoComponent {
  @Input() recurso: Recurso  | undefined

}
