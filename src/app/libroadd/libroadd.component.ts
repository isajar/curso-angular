import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-libroadd",
  templateUrl: "./libroadd.component.html",
  styleUrls: ["./libroadd.component.css"],
})
export class LibroaddComponent implements OnInit {
  categorias = [
    "Accion",
    "Aventura",
    "Ciencia Ficcion",
    "Drama",
    "Infantil",
    "Otras",
  ];

  libroForm: FormGroup;
  libro: any;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.libroForm = this.fb.group({
      titulo: ["", Validators.required],
      categoria: ["", Validators.required],
      link: ["", Validators.required],
    });
  }
  onSubmit() {
    this.libro = this.saveLibro();
  }
  saveLibro() {
    const libro = {
      titulo: this.libroForm.get("titulo").value,
      categoria: this.libroForm.get("categoria").value,
      link: this.libroForm.get("link").value,
    };
    return libro;
  }
}
