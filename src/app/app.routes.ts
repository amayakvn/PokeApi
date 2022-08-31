import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'detalles', component: DetallesComponent },
  { path: 'detalles/:id', component: DetallesComponent },
  { path: '**', redirectTo:"inicio" },

];
export const PokeRouting = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
