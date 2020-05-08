import { Component, OnInit } from "@angular/core";
import { Pelicula } from "../models/pelicula.model";
import { PeliculaService } from "../services/pelicula.service";

@Component({
  selector: "app-vista-tarjeta",
  templateUrl: "./vista-tarjeta.component.html",
  styleUrls: ["./vista-tarjeta.component.css"],
})
export class VistaTarjetaComponent implements OnInit {
  peliculas: Pelicula[] = [];
  mensaje: string;
  constructor(private peliculaService: PeliculaService) {}

  ngOnInit() {
    this.peliculas = this.peliculaService.getAllPeliculas();
  }

  peliMarcada(event: string) {
    this.mensaje = event;
    setTimeout(() => {
      this.mensaje = "";
    }, 3000);
  }
}
