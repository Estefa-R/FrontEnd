import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MercanciaModule } from '../mercancia/mercancia.module';
import { EmpleadoModule } from '../empleado/empleado.module';
import { CargosModule } from '../cargos/cargos.module';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HistorialMercanciaModule } from '../historialMercancia/historial-mercancia.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MercanciaModule,
    EmpleadoModule,
    CargosModule,
    HistorialMercanciaModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule
  ]
})
export class DashboardModule { }
