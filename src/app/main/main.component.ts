// tslint:disable: quotemark
import { Component, OnInit } from "@angular/core";
import { Pelicula } from "../models/pelicula.model";
import { PeliculaService } from "../services/pelicula.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",

  styleUrls: ["./main.component.css"],
})
export class MainComponent implements OnInit {
  titulo: string;
  categoria: string;
  link: string;
  mensaje: string;
  arregloPeliculas: Array<Pelicula> = [];

  constructor(private peliculasService: PeliculaService) {}

  ngOnInit() {
    this.arregloPeliculas = this.peliculasService.getAllPeliculas();
  }
  guardar() {
    this.arregloPeliculas = this.peliculasService.setPelicula(
      this.titulo,
      this.categoria,
      this.link
    );
    this.resetFormulario();
  }
  resetFormulario() {
    this.titulo = this.categoria = this.link = "";
  }

  peliMarcada(event: string) {
    this.mensaje = event;
    setTimeout(() => {
      this.mensaje = "";
    }, 3000);
  }
}
