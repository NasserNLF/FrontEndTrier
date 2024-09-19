import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListagemRoutingModule } from './listagem-routing.module';
import { ListagemComponent } from './listagem.component';
import { CadastroModule } from '../cadastro/cadastro.module';


@NgModule({
  declarations: [
    ListagemComponent
  ],
  imports: [
    CommonModule,
    ListagemRoutingModule,
  ],exports : [
    ListagemComponent
  ]
})
export class ListagemModule { }
