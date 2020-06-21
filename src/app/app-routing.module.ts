import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { VistaTarjetaComponent } from "./vista-tarjeta/vista-tarjeta.component";
import { VistaTablaComponent } from "./vista-tabla/vista-tabla.component";
import { LibroaddComponent } from "./libroadd/libroadd.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
  },
  {
    path: "tarjeta",
    component: VistaTarjetaComponent,
  },
  {
    path: "tabla",
    component: VistaTablaComponent,
  },
  {
    path: "libro-add",
    component: LibroaddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
