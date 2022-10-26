import { Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MercanciaService } from 'src/app/modules/shared/services/mercancia.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadoService } from 'src/app/modules/shared/services/empleado.service';

@Component({
  selector: 'app-actualizar-mercancia',
  templateUrl: './actualizar-mercancia.component.html',
  styleUrls: ['./actualizar-mercancia.component.css']
})
export class ActualizarMercanciaComponent implements OnInit {
  mercancia: any;
  empleados: any;

  public actualizarForm: FormGroup;
  estadoFormulario: string = "";
  panelOpenState = false;

  fecha_ingreso: any;

  constructor(private fb: FormBuilder,
    private mercanciaService: MercanciaService,
    private empleadoService: EmpleadoService,
    private dialogRef: MatDialogRef<ActualizarMercanciaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.estadoFormulario = "Actualizar";

      this.actualizarForm = this.fb.group( {
        id: [data.id, Validators.required],
        nombre: [data.nombre, Validators.required],
        cantidad: [data.cantidad, Validators.required],
        id_empleado: [data.id_empleado, Validators.required],
        fecha_modificacion: [data.fecha_modificacion, Validators.required],
      });
      this.fecha_ingreso = data.fecha_ingreso



    // hacemos getAllEmpleados y lo ponemos en una variable que nos almacena los datos de los empleados
    this.empleadoService.getAllEmpleado().subscribe( (dataMercancia:any) => {
      this.empleados = dataMercancia;
    });
    }

    ngOnInit(): void {
  }

  onSave() {
    let mercanciaFormData = {
      id: this.actualizarForm.get('id')?.value,
      nombre: this.actualizarForm.get('nombre')?.value,
      cantidad: this.actualizarForm.get('cantidad')?.value,
      id_empleado: this.actualizarForm.get('id_empleado')?.value,
      fecha_ingreso: this.fecha_ingreso,
      fecha_modificacion: new Date
        }

    this.mercanciaService.updateMercancia(mercanciaFormData).subscribe((mercanciaFormData: any)=>{
        this.dialogRef.close(1);
      }, (error: any) =>{
        this.dialogRef.close(2);
      })
  }

  onCancel(){
    this.dialogRef.close(3);

  }

}


