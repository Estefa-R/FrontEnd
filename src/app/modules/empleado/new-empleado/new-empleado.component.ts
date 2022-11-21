import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CargosService } from '../../shared/services/cargos.service';
import { EmpleadoService } from '../../shared/services/empleado.service';
import { MercanciaService } from '../../shared/services/mercancia.service';

export type cargos = {
  id: number;
  cargo: string;
}

@Component({
  selector: 'app-new-empleado',
  templateUrl: './new-empleado.component.html',
  styleUrls: ['./new-empleado.component.css']
})
export class NewEmpleadoComponent implements OnInit {

  public empleadoForm: FormGroup;
  estadoFormulario: string = "";
  cargos: cargos[]=[];
  selectedFile: any;
  empleado: any;
  mercancia: any;

  constructor(private fb: FormBuilder, private cargosService: CargosService,
    private empleadoService: EmpleadoService, public mercanciaService: MercanciaService, private dialogRef: MatDialogRef<NewEmpleadoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

      console.log(data);
      this.estadoFormulario = "Agregar";

      this.empleadoForm = this.fb.group( {
        nombre: ["", [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
        apellido: ['', Validators.required],
        edad: ['', Validators.required],
        id_cargo: ['', Validators.required],
        fecha_ingreso_empresa: ['', Validators.required]
     })
    }
  ngOnInit(): void {
    this.getAllCargos()
  }
  getAllCargos() {
    this.empleado = this.empleadoService.getAllEmpleado();
    this.mercancia = this.mercanciaService.getAllMercancia();
    this.cargosService.getAllCargos().subscribe((data: cargos[]) => {
        this.cargos = data;
        },
     (error: any) => { console.error(error) }
    );
  }

  onSave(){
    let empleadoFormData = {
      nombre: this.empleadoForm.get('nombre')?.value,
      apellido: this.empleadoForm.get('apellido')?.value,
      edad: this.empleadoForm.get('edad')?.value,
      id_cargo: this.empleadoForm.get('id_cargo')?.value,
      fecha_ingreso_empresa: this.empleadoForm.get('fecha_ingreso_empresa')?.value
    }

    this.empleadoService.saveEmpleado(empleadoFormData).subscribe((data: any)=>{
    this.dialogRef.close(1);
  }, (error: any) =>{
    this.dialogRef.close(2);
  })
  }

  onCancel(){
    this.dialogRef.close(3);

  }
}
