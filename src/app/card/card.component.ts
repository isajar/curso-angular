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

  leido = false;
  constructor() {}

  ngOnInit() {}

  marcar() {
    this.leido = !this.leido;
  }
}
