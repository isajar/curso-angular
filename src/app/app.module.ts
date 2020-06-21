import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";
import { FooterComponent } from "./footer/footer.component";
import { CardComponent } from "./card/card.component";
import { PeliculaService } from "./services/pelicula.service";
import { NavbarComponent } from "./navbar/navbar.component";
import { VistaTarjetaComponent } from "./vista-tarjeta/vista-tarjeta.component";
import { VistaTablaComponent } from "./vista-tabla/vista-tabla.component";
import { LibroaddComponent } from "./libroadd/libroadd.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    CardComponent,
    NavbarComponent,
    VistaTarjetaComponent,
    VistaTablaComponent,
    LibroaddComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [PeliculaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
