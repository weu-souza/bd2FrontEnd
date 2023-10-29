import {Component, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main/main/page/main.component";
import {AdicionarComponent} from "./crud/adicionar/adicionar-computador/adicionar.component";
import {AdicionarComparacaoComponent} from "./crud/adicionar/adicionar-comparacao/adicionar-comparacao.component";
import {ResultadoComponent} from "./main/resultado/page/resultado.component";
import {AtualizarComputadorComponent} from "./crud/atualizar/atualizar-computador/atualizar-computador.component";
import {AtualizarcomparacaoComponent} from "./crud/atualizar/atualizar-comparacao/atualizarcomparacao.component";

const routes: Routes = [
  {path: 'inicio', component: MainComponent},
  {path: 'adicionar', component: AdicionarComponent},
  {path: 'adicionar-comparacao/:id', component: AdicionarComparacaoComponent},
  {path: 'resultado', component: ResultadoComponent},
  {path: 'atualizar-computador/:id', component: AtualizarComputadorComponent},
  {path: 'atualizar-comparacao/:id', component: AtualizarcomparacaoComponent},
  {
    path: '', redirectTo: 'inicio', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
