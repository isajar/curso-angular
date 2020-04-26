import { Component, OnInit } from "@angular/core";
import { AlumnoLite } from "../models/alumno.model";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
})
export class MainComponent implements OnInit {
  nombre: String;
  arregloNombres: String[] = [];
  enviado = false;
  constructor() {}

  ngOnInit() {}
  enviar() {
    this.arregloNombres.push(this.nombre);
    this.nombre = "";
    this.enviado = true;
  }
  isEnviado() {
    return this.enviado;
  }
}
