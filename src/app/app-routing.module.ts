import {Component, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main/main/main.component";
import {AdicionarComponent} from "./crud/adicionar/adicionar-computador/adicionar.component";
import {AdicionarComparacaoComponent} from "./crud/adicionar/adicionar-comparacao/adicionar-comparacao.component";
import {ResultadoComponent} from "./main/resultado/resultado/resultado.component";
import {AtualizarComputadorComponent} from "./crud/atualizar/atualizar-computador/atualizar-computador.component";
import {AtualizarcomparacaoComponent} from "./crud/atualizar/atualizar-comparacao/atualizarcomparacao.component";

const routes: Routes = [
  {path: 'inicio', component: MainComponent},
  {path: 'adicionar', component: AdicionarComponent},
  {path: 'adicionar-comparacao', component: AdicionarComparacaoComponent},
  {path: 'resultado', component: ResultadoComponent},
  {path: 'atualizar-computador', component: AtualizarComputadorComponent},
  {path: 'atualizar-comparacao', component: AtualizarcomparacaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
