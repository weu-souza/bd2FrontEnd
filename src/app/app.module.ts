import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { MainComponent } from './main/main/main.component';
import { AdicionarComponent } from './crud/adicionar/adicionar-computador/adicionar.component';
import { ResultadoComponent } from './main/resultado/resultado/resultado.component';
import { AdicionarComparacaoComponent } from './crud/adicionar/adicionar-comparacao/adicionar-comparacao.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AtualizarComputadorComponent } from './crud/atualizar/atualizar-computador/atualizar-computador.component';
import { AtualizarcomparacaoComponent } from './crud/atualizar/atualizar-comparacao/atualizarcomparacao.component';
import { RemoverComputadorComponent } from './crud/remover/remover-computador/remover-computador.component';
import { RemoverComparacaoComponent } from './crud/remover/remover-comparacao/remover-comparacao.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AdicionarComponent,
    ResultadoComponent,
    AdicionarComparacaoComponent,
    AtualizarComputadorComponent,
    AtualizarcomparacaoComponent,
    RemoverComputadorComponent,
    RemoverComparacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
