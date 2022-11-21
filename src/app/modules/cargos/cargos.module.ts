import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { CargosComponent } from './cargos/cargos.component';
import { NewCargosComponent } from './new-cargos/new-cargos.component';



@NgModule({
  declarations: [
    CargosComponent,
    NewCargosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CargosModule { }
