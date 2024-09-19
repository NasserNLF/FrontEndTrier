import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoModule } from './main/produto/produto.module';
import { HeaderComponent } from './main/header/header.component';
import { HeaderModule } from './main/header/header.module';
import { ApresentacaoModule } from './main/apresentacao/apresentacao.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProdutoModule,
    HeaderModule,
    ApresentacaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
