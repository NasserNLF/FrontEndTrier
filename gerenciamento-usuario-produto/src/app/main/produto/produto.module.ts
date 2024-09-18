import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoComponent } from './produto.component';
import { CadastroModule } from './features/cadastro/cadastro.module';
import { ListagemModule } from './features/listagem/listagem.module';


@NgModule({
  declarations: [
    ProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    CadastroModule,
    ListagemModule
  ]
})
export class ProdutoModule { }
