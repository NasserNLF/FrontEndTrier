import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoModule } from './produto/produto.module';

const routes: Routes = [
  {path: 'produto', loadChildren: () => import('./produto/produto.module').then((m) => m.ProdutoModule)},

  {path: 'cliente', loadChildren: () => import('./cliente/cliente.module').then((m) => m.ClienteModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
