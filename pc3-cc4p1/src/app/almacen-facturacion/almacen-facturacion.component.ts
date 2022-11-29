import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-almacen-facturacion',
  templateUrl: './almacen-facturacion.component.html',
  styleUrls: ['./almacen-facturacion.component.css']
})
export class AlmacenFacturacionComponent implements OnInit {

  productos: any[] = [
    { nombre: 'Lapiz', cantidad: null },
    { nombre: 'Cuaderno', cantidad: null },
    { nombre: 'Libro', cantidad: null },
    { nombre: 'Lapiceros', cantidad: null },
    { nombre: 'Colores', cantidad: null }
  ]


  constructor() { }

  ngOnInit(): void {
  }



  obtenerInformacion(producto) {
    console.log(producto)
  }

}
