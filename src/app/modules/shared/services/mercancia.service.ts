import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url + '/Mercancia';

@Injectable({
  providedIn: 'root'
})
export class MercanciaService {

  constructor(private http: HttpClient) { }

  getAllMercancia(): Observable<any>{
    const endpoint = `${base_url}/listar`;
    return this.http.get(`${endpoint}`);
  }

  public getMercanciaById(id: any): Observable<any> {
    const endpoint = `${base_url}`;
    return this.http.get(`${endpoint}/BuscarPorId/${id}`);
  }

  getFindByNombre(nombre: any): Observable<any> {
    const endpoint = `${base_url}`;
    return this.http.get(`${endpoint}/BuscarPorNombre/${nombre}`);
  }

  public saveMercancia (dataMercancia:any): Observable<any>{
    const endpoint = `${base_url}`;
    return this.http.post(`${endpoint}/CrearMercancia`, dataMercancia);
  }

  public updateMercancia (data:any): Observable<any> {
    console.log(`${base_url}/updateMercancia`);
    return this.http.put(`${base_url}/updateMercancia`, data );
  }

  public deleteMercancia(id: any, id_empleado: any):Observable<any>{
    return this.http.delete(`${base_url}/deleteMercancia/${id}/${id_empleado}`);
  }
}
