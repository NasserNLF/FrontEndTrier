import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponenteComponent } from './meu-primeiro-componente/meu-primeiro-componente.component';
import { ComponenteCabecalhoComponent } from './componente-cabecalho/componente-cabecalho.component';
import { ComponenteConteudoComponent } from './componente-conteudo/componente-conteudo.component';
import { ComponentFormularioComponent } from './component-formulario/component-formulario.component';
import { FormsModule } from '@angular/forms';
import { ComponentFormularioClienteComponent } from './component-formulario-cliente/component-formulario-cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponenteComponent,
    ComponenteCabecalhoComponent,
    ComponenteConteudoComponent,
    ComponentFormularioComponent,
    ComponentFormularioClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
