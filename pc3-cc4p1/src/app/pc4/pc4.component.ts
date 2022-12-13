import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Apollo } from 'apollo-angular'
import { REQUEST_FILE } from '../graphql/graphql.queries';
//import { ADD_TODO, DELETE_TODO, GET_TODOS } from '../pc4.queries';


@Component({
  selector: 'app-pc4',
  templateUrl: './pc4.component.html',
  styleUrls: ['./pc4.component.css']
})
export class Pc4Component implements OnInit {

  nombreArchivo: string;
  archivo: any

  constructor(private apollo: Apollo) { }

  ngOnInit(): void { }


  getFile(event) {
    this.archivo = event.target.files[0]
    this.nombreArchivo = this.archivo.name

    this.requestFile()

    console.log(event)
    console.log(event.target.files[0].name)
  }

  requestFile() {


  }

  sendFile() {

  }

}
