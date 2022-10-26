import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MercanciaService } from 'src/app/modules/shared/services/mercancia.service';
import { EmpleadoService } from 'src/app/modules/shared/services/empleado.service';

@Component({
  selector: 'app-new-mercancia',
  templateUrl: './new-mercancia.component.html',
  styleUrls: ['./new-mercancia.component.css']
})
export class NewMercanciaComponent implements OnInit {

  mercancia: any;

  public mercanciaForm: FormGroup;
  estadoFormulario: string = "";
  panelOpenState = false;
  empleados: any;

  constructor(private fb: FormBuilder, private mercanciaService: MercanciaService,
    private empleadoService: EmpleadoService,
    private dialogRef: MatDialogRef<NewMercanciaComponent>,

            //Se obtiene información del componente padre
            @Inject(MAT_DIALOG_DATA) public dataMercancia: any) {

    this.estadoFormulario = "Agregar";

    this.mercanciaForm = this.fb.group( {
      nombre: ["", [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      cantidad: ["", Validators.required],
      id_empleado: ["", Validators.required],
      fecha_ingreso: ["", Validators.required]
    });

    // hacemos getAllEmpleados y lo ponemos en una variable que nos almacena los datos de los empleados
    this.empleadoService.getAllEmpleado().subscribe( (dataMercancia:any) => {
      this.empleados = dataMercancia;
    });
  }

  ngOnInit(): void {
  }

  onSave(){

    let data = {
      nombre: this.mercanciaForm.get('nombre')?.value,
      cantidad: this.mercanciaForm.get('cantidad')?.value,
      id_empleado: this.mercanciaForm.get('id_empleado')?.value,
      fecha_ingreso: this.mercanciaForm.get('fecha_ingreso')?.value
    }

    this.mercanciaService.saveMercancia(data).subscribe((data: any)=>{
      console.log(data);
      this.dialogRef.close(1);
    }, (error: any) =>{
      this.dialogRef.close(2);
    })
  }

  onCancel(){
    this.dialogRef.close(3);

  }

  updateForm(dataMercancia: any){
    this.mercanciaForm = this.fb.group( {
      nombre: [dataMercancia.nombre, Validators.required],
      cantidad: [dataMercancia.cantidad, Validators.required],
      fecha_ingreso: [dataMercancia.fecha_ingreso, Validators.required],
    });

  }

}
