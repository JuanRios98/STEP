import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Actividad } from '../Modelos/actividad.module';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  private ApiBase=''

  constructor(private _http: HttpClient){
    this.ApiBase = environment.urlApiBase + 'actividad';
  }

  GetActividad(): Observable<Actividad[]>{
    return this._http.get<Actividad[]>(`${this.ApiBase}/listar`)
  }
  
  PostActividad(actividad: Actividad):Observable<Actividad>{
    return this._http.post<Actividad>(`${this.ApiBase}/crear`,actividad)
  }

  PutActividad(actividad: Actividad): Observable<Actividad[]>{
    return this._http.put<Actividad[]>(this.ApiBase+'/', actividad) 
  }

  DeleteActividad(id: Number): Observable<any>{
    return this._http.delete(`${this.ApiBase}/eliminar/${id}`)
  }
}
