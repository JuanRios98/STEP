import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Usuario } from '../Modelos/usuario.module';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  apiBase='';

  constructor(private _http: HttpClient) { 
    this.apiBase = environment.urlApiBase + 'usuario';
  }

  getUsuarios():Observable<Usuario[]>{
    return this._http.get<Usuario[]>(`${this.apiBase}/listar`)
  }

  PostUsuario(usuario: Usuario): Observable <Usuario>{
    return this._http.post<Usuario>(`${this.apiBase}/crear`, usuario)
  }

  PutUsuario(usuario: Usuario): Observable<Usuario[]>{
    return this._http.put<Usuario[]>(`${this.apiBase}/actualizar`, usuario)
  }

  DeleteUsuario(id: Number): Observable<any>{
    return this._http.delete(`${this.apiBase}/eliminar/${id}`)
  }
} 
