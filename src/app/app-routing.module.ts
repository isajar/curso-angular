import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { VistaTarjetaComponent } from "./vista-tarjeta/vista-tarjeta.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
  },
  {
    path: "tarjetas",
    component: VistaTarjetaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
