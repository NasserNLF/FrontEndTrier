import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './features/cadastro/cadastro.component';
import { ListagemComponent } from './features/listagem/listagem.component';

const routes: Routes = [  {path : '', component : CadastroComponent},
  {path : 'cadastro', component: CadastroComponent},
  {path : 'listagem', component: ListagemComponent},
  {path : 'cadastro/:id', component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
