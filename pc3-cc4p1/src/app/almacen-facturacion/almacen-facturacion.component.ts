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



  obtenerInformacion(producto: string, cantidad: number) {
    if (cantidad == null) {
      this.toastService.showError('Falta información', 'Debe colocar la cantidad del producto')
      return
    }

    this.almacenFacturacionService.getInformacion(producto, cantidad);

    this.detalleProducto[0].producto = producto
    this.detalleProducto[0].cantidad = cantidad
    this.detalleProducto[0].descripcion = 'Este producto es un ' + producto
    this.detalleProducto[0].precioUnidad = Math.round(Math.random() * 100) / 100
    this.detalleProducto[0].factura = 'S/. ' + cantidad * this.detalleProducto[0].precioUnidad
  }


  realizarCompra() {
    if (this.detalleProducto[0].producto == null) {
      this.toastService.showError('Falta información', 'Seleccione un producto para poder realizar la compra')
      return
    }

    this.toastService.showSuccess('Compra realizada', 'La compra se ha realizado con éxito');
  }

}
