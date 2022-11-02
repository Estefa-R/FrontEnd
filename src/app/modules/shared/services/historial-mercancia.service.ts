import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url + '/AuditoriaSitioWeb';

@Injectable({
  providedIn: 'root'
})
export class HistorialMercanciaService {

  constructor(private http: HttpClient) { }

  getAllHistorialMercancia(): Observable<any>{
    const endpoint = `${base_url}/listar`;
    return this.http.get(`${endpoint}`);
  }

  getFindByNombre_Mercancia(nombre_mercancia: any): Observable<any> {
    const endpoint = `${base_url}`;
    return this.http.get(`${endpoint}/BuscarPorNombreMercancia/${nombre_mercancia}`);
  }

}
