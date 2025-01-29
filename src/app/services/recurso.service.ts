import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Recurso } from '../Modelos/recurso.module';

@Injectable({
  providedIn: 'root'
})
export class RecursoService {

  apiBase='';

  constructor(private _http: HttpClient) { 
    this.apiBase = environment.urlApiBase + 'recurso';
  }

  getRecursos():Observable<Recurso[]>{
    return this._http.get<Recurso[]>(`${this.apiBase}/listar`)
  }
 

  PostRecurso(recurso: Recurso): Observable<Recurso>{
    return this._http.post<Recurso>(`${this.apiBase}/crear`, recurso)
  }

  PutRecurso(recurso: Recurso): Observable<Recurso[]>{
    return this._http.put<Recurso[]>(`${this.apiBase}/actualizar`, recurso)
  }

  DeleteRecurso(id: Number): Observable<any>{
    return this._http.delete(`${this.apiBase}/eliminar/${id}`)
  }


}
