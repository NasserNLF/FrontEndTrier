import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteCabecalhoComponent } from './componente-cabecalho/componente-cabecalho.component';
import { ComponenteConteudoComponent } from './componente-conteudo/componente-conteudo.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'formulario', component: ComponenteConteudoComponent},
  {path: 'conteudo', component: ComponenteConteudoComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
