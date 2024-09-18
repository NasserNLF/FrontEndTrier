import { PrimeiroModuloRoteamentoComponent } from './primeiro-modulo-roteamento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './components/listagem/listagem.component';

const routes: Routes = [
  {path: "", component: ListagemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimeiroModuloRoteamentoRoutingModule { }
