import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { EmpleadoComponent } from './empleado/empleado.component';
import { NewEmpleadoComponent } from './new-empleado/new-empleado.component';



@NgModule({
  declarations: [
    EmpleadoComponent,
    NewEmpleadoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmpleadoModule { }
