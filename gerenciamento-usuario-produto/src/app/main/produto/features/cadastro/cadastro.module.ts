import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { ProdutoComponent } from '../../produto.component';



@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule { }
