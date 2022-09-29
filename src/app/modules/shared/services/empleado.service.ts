import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url + '/Empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient) { }

  public getAllEmpleado(): Observable<any> {
    const endpoint = `${base_url}/Listar`;
    return this.http.get(`${endpoint}`);
  }

  public getEmpleadoById(id: any): Observable<any> {
    const endpoint = `${base_url}`;
    return this.http.get(`${endpoint}/BuscarPorId/${id}`);
  }

   public saveEmpleado (dataEmpleado:any): Observable<any>{
    const endpoint = `${base_url}`;
    return this.http.post(`${endpoint}/CrearEmpleado`, dataEmpleado);
  }

  getFindByApellido(apellido: any): Observable<any> {
    const endpoint = `${base_url}`;
    return this.http.get(`${endpoint}/BuscarPorApellido/${apellido}`);
  }

}
