import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MercanciaService } from '../../../shared/services/mercancia.service';

@Component({
  selector: 'app-confirmar-eliminar',
  templateUrl: './confirmar-eliminar.component.html',
  styleUrls: ['./confirmar-eliminar.component.css']
})
export class ConfirmarEliminarComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmarEliminarComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any, private mercanciaService: MercanciaService) { }

  ngOnInit(): void {
  }


  onNoClick(){
    this.dialogRef.close(3)
  }
  deleteMercancia(){
    if(this.data != null){
      this.mercanciaService.deleteMercancia(this.data.id, this.data.id_empleado).
      subscribe((data: any)=>{
        this.dialogRef.close(1);
      }, (error: any)=>{
        this.dialogRef.close(2);
      })
    }else{
      this.dialogRef.close(2);
    }
  }
}
