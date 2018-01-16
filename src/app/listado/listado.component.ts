import { Component, OnInit } from '@angular/core';
import { ProductoServiceService } from '../producto-service.service'; // Importamos nuestro servicio
import 'rxjs/add/operator/map'; // Libreria para mapear los resultados a JSON

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  filterargs;
  listado; // Inicializamos la variable en la cual agregaremos nuestro listado de registros
  items;

  constructor(private crudProducto: ProductoServiceService) {} //Inicializamos una instancia de nuestro Servicio

  ngOnInit() {
    this.crudProducto.listar()            // Llamamos a la funcion <strong>listar</strong> de nuestro servicio
    .map((response) => response.json())   // Mapeamos los datos devueltos por nuestro archivo php
    .subscribe((data) => {
      this.listado = data;                // Asignamos nuestros datos mapeados a una variable
    });
  }

}
