import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MercanciaComponent } from './components/mercancia/mercancia.component';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewMercanciaComponent } from './components/new-mercancia/new-mercancia.component';
import { ConfirmarEliminarComponent } from '../mercancia/components/confirmar-eliminar/confirmar-eliminar.component';
import { ActualizarMercanciaComponent } from '../mercancia/components/actualizar-mercancia/actualizar-mercancia.component';

@NgModule({
  declarations: [
    MercanciaComponent,
    NewMercanciaComponent,
    ConfirmarEliminarComponent,
    ActualizarMercanciaComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MercanciaModule { }
