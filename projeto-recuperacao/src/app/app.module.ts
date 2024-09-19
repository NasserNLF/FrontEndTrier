import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoModule } from './produto/produto.module';
import { HeaderModule } from "./header/header.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProdutoModule,
    HeaderModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
