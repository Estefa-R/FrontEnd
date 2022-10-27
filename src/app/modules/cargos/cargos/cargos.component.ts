import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';

import { CargosService } from 'src/app/modules/shared/services/cargos.service';
import { NewCargosComponent } from '../new-cargos/new-cargos.component';
import { EmpleadoService } from '../../shared/services/empleado.service';
import { MercanciaService } from '../../shared/services/mercancia.service';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent implements OnInit {

  cargo: any;
  empleado: any;
  mercancia: any;

  constructor(private cargosService: CargosService,
    public dialog: MatDialog, private snackBar: MatSnackBar,
    public empleadoService: EmpleadoService,
    public mercanciaService: MercanciaService
    ) { }

  ngOnInit(): void {
    this.getAllCargos();
  }

displayedColumns: string[] = ['id', 'cargo'];
dataSource = new MatTableDataSource<CargosElement>();

@ViewChild(MatPaginator)
paginator!: MatPaginator;

getAllCargos(){
  this.empleado = this.empleadoService.getAllEmpleado();
  this.mercancia = this.mercanciaService.getAllMercancia();
  this.cargosService.getAllCargos().subscribe((data: any) => {
        this.processCargosResponse(data);
        this.cargo = data;
      },
        (error: any) => { console.error(error) }
      );
}
processCargosResponse(resp: any ) {
  const dateCargos: CargosElement[] = [];
     let listCargos = resp;

     listCargos.forEach((element: CargosElement) => {
       element.cargo = element.cargo;
       dateCargos.push(element);
     });

     //set the datasource
     this.dataSource = new MatTableDataSource<CargosElement>(dateCargos);
     this.dataSource.paginator = this.paginator;

}

openCargosDialog(){
  const dialogRef = this.dialog.open(NewCargosComponent , {
    width: '450px'
  });

  dialogRef.afterClosed().subscribe((result:any) => {
    console.log(result)
    if( result == 1){
      this.openSnackBar("Se agregó un nuevo cargo", "Exitosamente" );
      this.getAllCargos();
    } else if (result == 2) {
      this.openSnackBar("Se produjo un error al guardar el cargo", "Error");
    }
  });
}

buscar( cargos: any){

  if( cargos.length === 0){
  return this.getAllCargos();
  }

  this.cargosService.getFindByCargo(cargos)
    .subscribe( (resp: any) => {
      this.processCargosResponse(resp);
    })
  }

openSnackBar(message: string, action: string) : MatSnackBarRef<SimpleSnackBar>{
  return this.snackBar.open(message, action, {
    duration: 2000
  })

}
}
export interface CargosElement{
  id: number;
  cargo: string;
}
