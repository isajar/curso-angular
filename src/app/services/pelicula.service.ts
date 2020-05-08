import { Injectable } from "@angular/core";
import { Pelicula } from "../models/pelicula.model";

@Injectable({
  providedIn: "root",
})
export class PeliculaService {
  peliculas: Pelicula[] = [];
  constructor() {
    this.initPeliculas();
  }

  // Inicia el arreglo con estas peliculas
  initPeliculas() {
    const pelicula1 = new Pelicula("Titanic", "Drama", "link");
    const pelicula2 = new Pelicula("Spiderman", "Ficcion", "link2");
    const pelicula3 = new Pelicula("El Padrino", "Drama", "link3");
    this.peliculas = [pelicula1, pelicula2, pelicula3];
  }

  // Devuelve todas las peliculas
  getAllPeliculas(): Pelicula[] {
    return this.peliculas;
  }
  // Guarda una pelicula
  setPelicula(titulo: string, categoria: string, link: string): Pelicula[] {
    const pelicula = new Pelicula(titulo, categoria, link);
    this.peliculas.push(pelicula);
    return this.peliculas;
  }
}
