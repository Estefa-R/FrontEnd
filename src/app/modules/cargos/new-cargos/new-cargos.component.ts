import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewEmpleadoComponent } from '../../empleado/new-empleado/new-empleado.component';
import { CargosService } from '../../shared/services/cargos.service';


@Component({
  selector: 'app-new-cargos',
  templateUrl: './new-cargos.component.html',
  styleUrls: ['./new-cargos.component.css']
})
export class NewCargosComponent implements OnInit {

  public cargosForm: FormGroup;
  estadoFormulario: string = "";
  selectedFile: any;
  cargos: any;

  constructor(private fb: FormBuilder, private cargosService: CargosService,
   private dialogRef: MatDialogRef<NewEmpleadoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

      this.estadoFormulario = "Agregar";
      this.cargosForm = this.fb.group( {
        cargo: ['', Validators.required]
     })
    }

  ngOnInit(): void {
  }

  onSave(){
    let data = {
      cargo: this.cargosForm.get('cargo')?.value
    }

    this.cargosService.saveCargos(data).subscribe((data: any)=>{
      this.dialogRef.close(1);
    }, (error: any) =>{
      this.dialogRef.close(2);
    })
  }

  onCancel(){
    this.dialogRef.close(3);
  }

}
