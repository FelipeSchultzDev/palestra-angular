import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarComponent } from './../components/cadastrar/cadastrar.component';
import { EditarComponent } from './../components/editar/editar.component';
import { RemoverComponent } from './../components/remover/remover.component';
import { ConsultarComponent } from './../components/consultar/consultar.component';

const routes: Routes = [
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'editar', component: EditarComponent },
  { path: 'consultar', component: ConsultarComponent },
  { path: 'remover', component: RemoverComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
