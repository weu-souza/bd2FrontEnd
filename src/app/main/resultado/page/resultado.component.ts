import {Component, OnInit} from '@angular/core';
import {MaiorValor, Resultado} from "../model/resultado";
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
  id: number | undefined;
  dialogMsg: string = '';
  dialog2: boolean = false;
  maiorvalor: MaiorValor[] = [];
  maiorV: number | undefined;

  constructor(private resultadoService: ComparacaoService,) {
  }

  ngOnInit(): void {
    this.findAll();
    this.findMaiorValor()
  }

  findAll() {
    this.resultadoService.getAllResultado().subscribe(res => {
      this.Resultados = res;
    });
  }

  findMaiorValor() {
    this.resultadoService.getMaiorValor().subscribe(res => {
      for (var value of res) {
        this.maiorV = value.melhorAvaliacao
      }

    })

  }


  abrirDialog(id: number) {
    this.dialog = true;
    this.id = id;
  }

  fecharDialog() {
    this.dialog = false;
    this.dialog2 = false;
  }

  deletar() {
    this.resultadoService.deleteResultado(this.id).subscribe(res => {
      this.dialogMsg = 'deletado com sucesso!!!';
      this.dialog2 = true;
      this.dialog = false;
      this.findAll();
      this.findMaiorValor()
    }, error => {
      this.dialogMsg = 'Erro ao deletar!!!';
      this.dialog2 = true;
      this.dialog = false;
    })
  }

  protected readonly Resultado = Resultado;
}
