import { ApresentacaoComponent } from './main/apresentacao/apresentacao.component';
import { ApresentacaoModule } from './main/apresentacao/apresentacao.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", component: ApresentacaoComponent},
  {path: "produto", loadChildren: () => import("./main/produto/produto.module").then((m) => m.ProdutoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
