import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Cliente } from '../Modelos/cliente.module';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  apiBase=''

  constructor(private _http: HttpClient){
    this.apiBase = environment.urlApiBase + 'cliente';
   }

   GetCliente(): Observable<Cliente[]>{
    return this._http.get<Cliente[]>(`${this.apiBase}/listar`)
   }

   PostCliente(cliente: Cliente): Observable<Cliente>{
    return this._http.post<Cliente>(`${this.apiBase}/crear`, cliente)
   }

   PutCliente(cliente: Cliente): Observable<Cliente[]>{
    return this._http.put<Cliente[]>(`${this.apiBase}/actualizar`, cliente)
   }

   DeleteCliente(nit: number): Observable<any> {
    return this._http.delete(`${this.apiBase}/eliminar/${nit}`)
   }

   }

