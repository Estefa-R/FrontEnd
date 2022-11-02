import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActualizarMercanciaComponent } from '../actualizar-mercancia/actualizar-mercancia.component';
import { ConfirmarEliminarComponent } from '../confirmar-eliminar/confirmar-eliminar.component';
import { MercanciaService } from 'src/app/modules/shared/services/mercancia.service';
import { NewMercanciaComponent } from '../new-mercancia/new-mercancia.component';

@Component({
  selector: 'app-mercancia',
  templateUrl: './mercancia.component.html',
  styleUrls: ['./mercancia.component.css']
})
export class MercanciaComponent implements OnInit {
  mercancia: any;

  constructor(private MercanciaService: MercanciaService,
    public dialog: MatDialog, private snackBar: MatSnackBar) { }

ngOnInit(): void {
this.getAllMercancia();
}
displayedColumns: string[] = ['id', 'nombre', 'cantidad', 'fecha_ingreso', 'id_empleado', 'fecha_modificacion',  'actions'];
dataSource = new MatTableDataSource<MercanciaElement>();

@ViewChild(MatPaginator)
paginator!: MatPaginator;

getAllMercancia(){
  this.MercanciaService.getAllMercancia().subscribe( (dataMercancia:any) => {
    this.processMercanciaResponse(dataMercancia);
  }, (error: any) => {
      console.log("error: ", error);
  })
}

processMercanciaResponse(dataMercancia: any[]){
  this.dataSource = new MatTableDataSource<MercanciaElement>(dataMercancia);
  this.dataSource.paginator = this.paginator;
}

openMercanciaDialog(){
  const dialogRef = this.dialog.open(NewMercanciaComponent , {
  width: '450px'
  });

  dialogRef.afterClosed().subscribe((result:any) => {
    console.log(result);
    if( result == 1){
        this.openSnackBar("Mercancía agregada", "Exitosamente ");
        this.getAllMercancia();
      } else if (result == 2) {
        this.openSnackBar("El nombre de la mercancía existe en la base de datos", "NO se puede crear");
      }
    });
}

updateMercancia(data: any){
    const dialogRef = this.dialog.open(ActualizarMercanciaComponent , {
      width: '450px',
      data: { ...data }
  });

  dialogRef.afterClosed().subscribe((result:any) => {
    if( result == 1){
        this.openSnackBar("Mercancía actualizada", "Exitosamente"  );
        this.getAllMercancia();

      } else if (result == 2) {
        this.openSnackBar("Se produjo un error al actualizar la mercancía", "Error");
      }
    });
}

deleteMercancia(id: any, id_empleado: any) {
  const dialogRef = this.dialog.open(ConfirmarEliminarComponent , {
    width: '450px',
    data: { id: id, id_empleado: id_empleado}
});

dialogRef.afterClosed().subscribe((result:any) => {

    if( result == 1){
        this.openSnackBar("Mercancía eliminada", "Exitosamente");
        this.getAllMercancia();
      } else if (result == 2) {
        this.openSnackBar("Se produjo un error al eliminar la mercancía", "Error");
      }
    });
}

buscar( nombre: any){

if( nombre.length === 0){
return this.getAllMercancia();
}

this.MercanciaService.getFindByNombre(nombre)
  .subscribe( (resp: any) => {
    this.processMercanciaResponse(resp);
  })
}


  openSnackBar(message: string, action: string) : MatSnackBarRef<SimpleSnackBar>{
    return this.snackBar.open(message, action, {
      duration: 5000
    })
  }
}

  export interface MercanciaElement {
    id: number;
    nombre: string;
    cantidad: number;
    fecha_ingreso: Date;
    id_empleado: number;
    fecha_modificacion: Date;
  }

