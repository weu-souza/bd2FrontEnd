import {Component, OnInit} from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {Computador} from "../model/computador";
import {ComputadorService} from "../service/computador.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  dialog: boolean = false;
  // @ts-ignore
  id: number | undefined;

  computador: Observable<Computador[]> | undefined;
  dialog2: boolean = false;
  dialogMsg: string = '';

  constructor(private computadorService: ComputadorService, private router: Router) {
  }

  ngOnInit(): void {
    this.getComputador();
  }

  getComputador() {
    this.computador = this.computadorService.getAllComputador()
      .pipe(
        catchError(err => {
          return throwError(err.message);
        })
      );
  }

  abrirDialog(id: number | undefined) {
    this.dialog = true;
    this.id = id;
  }

  fecharDialog() {
    this.dialog = false;
    this.dialog2 = false;
  }

  delete() {
    this.computadorService.deleteComputador(this.id).subscribe(res => {
        this.dialogMsg = 'deletado com sucesso!!!';
        this.dialog2 = true;
        this.dialog = false;
        this.getComputador();
      }, error => {
        this.dialogMsg = 'Erro ao deletar!!!';
        this.dialog2 = true;
        this.dialog = false;
      }
    )
  }

  atualizar(id: number | undefined) {
    this.router.navigateByUrl(`/atualizar-computador/${id}`);

  }
}
