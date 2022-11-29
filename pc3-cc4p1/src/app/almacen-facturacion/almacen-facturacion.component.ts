import { Component, OnInit } from '@angular/core';
import { ToastService } from '../toast/toast.service';
import { AlmacenFacturacionService } from './almacen-facturacion.service';

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
    { nombre: 'Lapicero', cantidad: null },
    { nombre: 'Color', cantidad: null }
  ]

  detalleProducto: any[] = [
    {
      producto: null,
      precioUnidad: null,
      cantidad: null,
      descripcion: null,
      factura: null
    }]



  constructor(
    private almacenFacturacionService: AlmacenFacturacionService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
  }



  obtenerInformacion(i: number) {
    if (this.productos[i].cantidad == null) {
      this.toastService.showError('Falta información', 'Debe colocar la cantidad del producto')
      return
    }

    this.almacenFacturacionService.getInformacion(this.productos[i].producto, this.productos[i].cantidad, i.toString());

    this.detalleProducto[0].producto = this.productos[i].nombre
    this.detalleProducto[0].cantidad = this.productos[i].cantidad
    this.detalleProducto[0].descripcion = 'Este producto es un ' + this.productos[i].nombre
    this.detalleProducto[0].precioUnidad = Math.round(Math.random() * 100) / 100
    this.detalleProducto[0].factura = 'S/. ' + this.productos[i].cantidad * this.detalleProducto[0].precioUnidad
  }


  realizarCompra() {
    if (this.detalleProducto[0].cantidad == null) {
      this.toastService.showError('Falta información', 'Seleccione un producto para poder realizar la compra')
      return
    }

    this.toastService.showSuccess('Compra realizada', 'La compra se ha realizado con éxito');
  }

}
