import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './core/header/header.component';
import {MainComponent} from './main/main/page/main.component';
import {AdicionarComponent} from './crud/adicionar/adicionar-computador/adicionar.component';
import {ResultadoComponent} from './main/resultado/page/resultado.component';
import {AdicionarComparacaoComponent} from './crud/adicionar/adicionar-comparacao/adicionar-comparacao.component';
import {AtualizarComputadorComponent} from './crud/atualizar/atualizar-computador/atualizar-computador.component';
import {AtualizarcomparacaoComponent} from './crud/atualizar/atualizar-comparacao/atualizarcomparacao.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
