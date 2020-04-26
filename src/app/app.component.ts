import { Component } from "@angular/core";
import { Alumno } from "./models/alumno.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "curso-angular";
  alumno = {
    id: 123,
    nombre: "Juan Gomez",
    email: "juan@juan.com",
    avatar: "https://api.adorable.io/avatars/285/abott@adorable.png",
    promedio_general: 8.5,
    carrera: "ingenieria",
    condicion: "Regular",
    url: "https://github.com/isajar",
    materias_en_curso: ["Calculo I", "Fisica I", "Algebra"],
  };
  alumno2: Alumno = new Alumno(
    456,
    "isa",
    "isa@isa.com",
    "avatar",
    10,
    "ingenieria",
    "regular",
    "url",
    ["m1", "m2"]
  );
  modificarTexto() {
    this.title = "Nuevo Titulo";
  }
}
