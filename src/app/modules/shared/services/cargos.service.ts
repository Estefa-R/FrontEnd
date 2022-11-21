import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url + '/Cargos';

@Injectable({
  providedIn: 'root'
})
export class CargosService {

constructor(private http: HttpClient) { }

  public getAllCargos(): Observable<any> {
    const endpoint = `${base_url}/Listar`;
    return this.http.get(`${endpoint}`);
  }

   public getCargosById(id: any): Observable<any> {
    const endpoint = `${base_url}`;
    return this.http.get(`${endpoint}/BuscarPorId/${id}`);
  }


  public saveCargos (dataCargos:any): Observable<any>{
    const endpoint = `${base_url}`;
    return this.http.post(`${endpoint}/CrearCargos`, dataCargos);
  }

  getFindByCargo(cargos: any): Observable<any> {
    const endpoint = `${base_url}`;
    return this.http.get(`${endpoint}/BuscarPorCargos/${cargos}`);
  }

}
