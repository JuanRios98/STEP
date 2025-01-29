import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Proyecto } from '../Modelos/proyecto.module';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  ApiBase='';

  constructor(private _http: HttpClient){
    this.ApiBase = environment.urlApiBase + 'proyecto'
   }

   GetProyecto():Observable<Proyecto[]>{
    return this._http.get<Proyecto[]>(`${this.ApiBase}/listar`)
   }

   PostProyecto(proyecto: Proyecto): Observable<Proyecto>{
    return this._http.post<Proyecto>(`${this.ApiBase}/crear`, proyecto)
   }

   PutProyecto(proyecto: Proyecto): Observable<Proyecto[]>{
    return this._http.put<Proyecto[]>(`${this.ApiBase}/actualizar`, proyecto)
   }

   DeleteProyecto(id: Number): Observable<any>{
    return this._http.delete(`${this.ApiBase}/eliminar/${id}`)
   }
  
  }
