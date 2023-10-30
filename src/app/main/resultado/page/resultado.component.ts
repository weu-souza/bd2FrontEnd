import {Component, OnInit} from '@angular/core';
import {Resultado} from "../model/resultado";
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
    }, error => {
      this.dialogMsg = 'Erro ao deletar!!!';
      this.dialog2 = true;
      this.dialog = false;
    })
  }

  protected readonly Resultado = Resultado;
}
