import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargosComponent } from '../cargos/cargos/cargos.component';
import { EmpleadoComponent } from '../empleado/empleado/empleado.component';
import { HistorialMercanciaComponent } from '../historialMercancia/historial-mercancia/historial-mercancia.component';
import { MercanciaComponent } from '../mercancia/components/mercancia/mercancia.component';
import { HomeComponent } from './components/home/home.component';

const childRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: MercanciaComponent },
  { path: 'mercancia', component: MercanciaComponent },
  { path: '', component: EmpleadoComponent },
  { path: 'empleado', component: EmpleadoComponent },
  { path: '', component: CargosComponent },
  { path: 'cargos', component: CargosComponent },
  { path: '', component: HistorialMercanciaComponent },
  { path: 'historial mercancia', component: HistorialMercanciaComponent },

]

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: []
})
export class RouterChildModule { }
