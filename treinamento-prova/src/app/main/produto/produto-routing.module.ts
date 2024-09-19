import { ListagemComponent } from './features/listagem/listagem.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './features/cadastro/cadastro.component';

const routes: Routes = [
  {path : "", component : CadastroComponent},
  {path : "cadastro", component: CadastroComponent},
  {path : "listagem", component: ListagemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
