import { Component } from "@angular/core";

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
  modificarTexto() {
    this.title = "Nuevo Titulo";
  }
}
