import {Component, OnInit} from '@angular/core';
import { Resultado} from "../model/resultado";
import {catchError, Observable, throwError} from "rxjs";
import {ComparacaoService} from "../service/comparacao.service";


@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {
  // @ts-ignore
  resultado: Observable<Resultado[]>;
  Resultados: Resultado[] = [];
  dialog: boolean = false;
  id: number = 0;

  constructor(private resultadoService: ComparacaoService,) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.resultadoService.getAllResultado().subscribe(res => {
      this.Resultados = res;
    });
  }


  abrirDialog() {
    this.dialog = true;
  }

  fecharDialog() {
    this.dialog = false;
  }

  deletar() {

  }

  protected readonly Resultado = Resultado;
}
