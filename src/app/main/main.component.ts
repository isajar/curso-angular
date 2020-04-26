// tslint:disable: quotemark
import { Component, OnInit } from "@angular/core";
import { Pelicula } from "../models/pelicula.model";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",

  styleUrls: ["./main.component.css"],
})
export class MainComponent implements OnInit {
  titulo: string;
  categoria: string;
  link: string;
  arregloPeliculas: Array<Pelicula> = [];
  enviado = false;
  constructor() {}

  ngOnInit() {}
  guardar() {
    const pelicula = new Pelicula(this.titulo, this.categoria, this.link);
    this.arregloPeliculas.push(pelicula);
    this.resetFormulario();
  }
  resetFormulario() {
    this.titulo = this.categoria = this.link = "";
  }
  isEnviado() {
    return this.enviado;
  }
}
