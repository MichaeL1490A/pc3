import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormularioService } from './formulario.service';
import { forkJoin, Observable } from 'rxjs';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  email: string = '';
  password: string = '';
  rol: string = '';
  rol1: boolean = false;
  rol2: boolean = true;

  constructor(
    private router: Router,
    private formularioService: FormularioService,
    private toastService: ToastService

  ) { }


  ngOnInit(): void {
  }

  validarDatos(): boolean {
    if (this.email.length <= 0 && this.password.length <= 0) {
      this.toastService.showError('Sin datos', 'Ingrese su correo y contraseña para hacer la consulta');
      return false;
    }
    if (!(this.email.length > 0)) {
      this.toastService.showError('Falta correo', 'Ingrese el correo para hacer la consulta');
      return false;
    }
    if (!(this.email.includes('@') && this.email.includes('.'))) {
      this.toastService.showError('Correo inválido', 'Revise el correo o intente con otro');
      return false;
    }
    if (!(this.password.length > 0)) {
      this.toastService.showError('Falta contraseña', 'Ingrese la contraseña para hacer la consulta');
      return false;
    }
    return true;
  }


  eventoIniciar() {
    if (!this.validarDatos()) {
      this.router.navigate(['/']);
      return;
    }
    this.consultaRol();
    this.asignarRol();
  }

  eventoRol1() {
    if (this.rol1) {
      this.toastService.showSuccess("Cargando...", "Usted es del rol 1 ");
    } else {
      this.toastService.showError("Error", "Usted no pertenece al rol 1");
    }
  }

  eventoRol2() {
    if (this.rol2) {
      this.toastService.showSuccess("Cargando...", "Usted es del rol 2 ");
    } else {
      this.toastService.showError("Error", "Usted no pertenece al rol 2");
    }
  }

  consultaRol() {
    let listas: Observable<any>[] = [];

    listas.push(
      this.formularioService.getRol(this.email, this.password)
    );

    forkJoin(listas).subscribe({
      next: (res) => {
        this.rol = res[0];
      },
      error: (err) => {
        this.toastService.showError("Datos erróneos", "Los datos brindados no tienen un rol");
        this.router.navigate(['/']);
      }
    });
  }

  asignarRol() {
    if (this.rol == '1') {
      this.rol1 = true;
      this.rol2 = false;
    } else if (this.rol == '2') {
      this.rol1 = false;
      this.rol2 = true;
    } else {
      this.rol1 = false;
      this.rol2 = false;
    }
  }
}
