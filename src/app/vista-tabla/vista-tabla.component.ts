import { Component, OnInit } from "@angular/core";
import { PeliculaService } from "../services/pelicula.service";
import { Pelicula } from "../models/pelicula.model";

@Component({
  selector: "app-vista-tabla",
  templateUrl: "./vista-tabla.component.html",
  styleUrls: ["./vista-tabla.component.css"],
})
export class VistaTablaComponent implements OnInit {
  arregloPeliculas: Array<Pelicula> = [];

  constructor(private peliculasService: PeliculaService) {}

  ngOnInit() {
    this.arregloPeliculas = this.peliculasService.getAllPeliculas();
  }
}
