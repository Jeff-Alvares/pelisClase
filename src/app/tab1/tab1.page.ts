import { Component, OnInit } from '@angular/core';
import { Pelicula, RespuestaMDB } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  peliculasRecientes: Pelicula[] = [];
  slideOpts = {
  slidesPerView: 1.1,
  freeMode: true
  };
  

  constructor(private moviesService: MoviesService) {}

  /* A traves de ngOnInit se llama el servicio */
  ngOnInit() {
    this.moviesService.getPelis()
    .subscribe( (resp: RespuestaMDB)=>{
      console.log('Respuesta', resp);
        this.peliculasRecientes = resp.results; /* obtenemos el resultado desde la interfaz */
    }); /* Se muestra el contenido en Consola*/ 
  }
}
