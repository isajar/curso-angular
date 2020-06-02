// tslint:disable: quotemark
import { Component, OnInit, ViewChild } from "@angular/core";
import { Pelicula } from "../models/pelicula.model";
import { PeliculaService } from "../services/pelicula.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",

  styleUrls: ["./main.component.css"],
})
export class MainComponent implements OnInit {
  pelicula: any;
  mensaje: string;
  arregloPeliculas: Array<Pelicula> = [];

  categorias = [
    "Accion",
    "Aventura",
    "Ciencia Ficcion",
    "Drama",
    "Infantil",
    "Otras",
  ];

  @ViewChild("formpeli") formpeli: NgForm;

  constructor(private peliculasService: PeliculaService) {
    this.pelicula = {
      titulo: "",
      categoria: "",
      link: "",
    };
  }

  ngOnInit() {
    this.arregloPeliculas = this.peliculasService.getAllPeliculas();
  }
  guardar() {
    this.pelicula.titulo = this.formpeli.value.titulo;
    this.pelicula.categoria = this.formpeli.value.categoria;
    this.pelicula.link = this.formpeli.value.link;

    this.arregloPeliculas = this.peliculasService.setPelicula(
      this.pelicula.titulo,
      this.pelicula.categoria,
      this.pelicula.link
    );

    this.formpeli.reset();
  }
  // resetFormulario() {
  //   this.titulo = this.categoria = this.link = "";
  // }
}
