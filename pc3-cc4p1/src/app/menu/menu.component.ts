import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  titulo: string = 'Tercera Práctica Programación Concurrente y Distribuida';

  constructor() { }

  ngOnInit() { }



}
