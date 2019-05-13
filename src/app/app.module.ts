import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './../components/home/home.component';
import { CadastrarComponent } from './../components/cadastrar/cadastrar.component';
import { EditarComponent } from './../components/editar/editar.component';
import { RemoverComponent } from './../components/remover/remover.component';
import { ConsultarComponent } from './../components/consultar/consultar.component';

import { CpfPipe } from '../pipes/cpf.pipe';
import { CpfDirective } from '../directives/cpf.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastrarComponent,
    EditarComponent,
    ConsultarComponent,
    RemoverComponent,
    CpfPipe,
    CpfDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
