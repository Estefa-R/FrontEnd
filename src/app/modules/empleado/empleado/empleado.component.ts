import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { EmpleadoService } from '../../shared/services/empleado.service';
import { NewEmpleadoComponent } from '../new-empleado/new-empleado.component';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  constructor(private empleadoService: EmpleadoService,
    public dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllEmpleado();
  }
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'edad', 'id_cargo', 'fecha_ingreso_empresa'];
  dataSource = new MatTableDataSource<EmpleadoElement>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  getAllEmpleado() {
    this.empleadoService.getAllEmpleado()
    .subscribe( (dataEmpleado:any) => {

    this.processEmpleadoResponse(dataEmpleado);
  }, (error: any) => {
      console.log("error: ", error);
  })
}

processEmpleadoResponse(dataEmpleado: any[]){
  this.dataSource = new MatTableDataSource<EmpleadoElement>(dataEmpleado);
  this.dataSource.paginator = this.paginator;
}

  openEmpleadoDialog(){
    const dialogRef = this.dialog.open(NewEmpleadoComponent , {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe((result:any) => {

      if( result == 1){
        this.openSnackBar("Empleado agregado", "Exitosamente");
        this.getAllEmpleado();
      } else if (result == 2) {
        this.openSnackBar("Se produjo un error al guardar el empleado", "Error");
      }
    });
  }

  buscar( apellido: any){
    if( apellido.length === 0){
      return this.getAllEmpleado();
    }

    this.empleadoService.getFindByApellido(apellido)
      .subscribe( (resp: any) => {
        this.processEmpleadoResponse(resp);
      })
  }

  openSnackBar(message: string, action: string) : MatSnackBarRef<SimpleSnackBar>{
    return this.snackBar.open(message, action, {
      duration: 2000
    })
  }
}
  export interface EmpleadoElement{
    id: number;
    nombre: string;
    apellido: string;
    edad: number;
    id_cargo: number;
    fecha_ingreso_empresa: Date;

  }


