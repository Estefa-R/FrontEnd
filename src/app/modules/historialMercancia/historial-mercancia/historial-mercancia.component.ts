import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { HistorialMercanciaService } from 'src/app/modules/shared/services/historial-mercancia.service';

@Component({
  selector: 'app-historial-mercancia',
  templateUrl: './historial-mercancia.component.html',
  styleUrls: ['./historial-mercancia.component.css']
})
export class HistorialMercanciaComponent implements OnInit {

  constructor(private HistorialMercanciaService: HistorialMercanciaService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllHistorialMercancia();
  }

  displayedColumns: string[] = ['id', 'nombre_empleado', 'nombre_mercancia', 'fecha', 'operacion'];
  dataSource = new MatTableDataSource<HistorialMercanciaElement>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  getAllHistorialMercancia(){
    this.HistorialMercanciaService.getAllHistorialMercancia()
    .subscribe( (data:any) => {
      this.processHistorialMercanciaElementResponse(data);
    }, (error: any) => {
        console.log("error: ", error);
    })
  }

  processHistorialMercanciaElementResponse(data: any[]){
    this.dataSource = new MatTableDataSource<HistorialMercanciaElement>(data);
    this.dataSource.paginator = this.paginator;
  }

}

export interface HistorialMercanciaElement {
  id: number;
  nombre_empleado: String;
  nombre_mercancia: String;
  fecha: Date;
  operacion: String;
}
