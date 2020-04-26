import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input() titulo: string;
  @Input() subtitulo: string;
  @Input() link: string;
  @Input() creado: Date;

  @Output() marcado = new EventEmitter<string>();

  leido = false;

  constructor() {}

  ngOnInit() {}

  marcar() {
    this.leido = !this.leido;
    this.marcado.emit(this.titulo);
  }
}
