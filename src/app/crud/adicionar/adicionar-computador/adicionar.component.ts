import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ComputadorService} from "../../../main/main/service/computador.service";
import {Computador} from "../../../main/main/model/computador";

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.scss']
})
export class AdicionarComponent implements OnInit {
  computador: Computador = new Computador();

  // @ts-ignore
  addComputador: FormGroup;
  dialog: boolean = false;
  dialogMsg = '';

  constructor(private fb: FormBuilder, private computadorService: ComputadorService) {
  }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.addComputador = this.fb.group({
      nome: ['', [Validators.required]],
      descricao: ['', [Validators.required]]
    })
  }

  enviar() {
    if (this.addComputador.dirty && this.addComputador.valid) {
      this.computador = Object.assign({}, this.computador, this.addComputador.value);
      this.computadorService.postComputador(this.computador).subscribe(res => {
        this.dialogMsg = 'Enviado com sucesso!!!';
        this.dialog = true;
      })
    } else {
      this.dialogMsg = 'Preencha o formulario!!!';
      this.dialog = true;
    }

  }

  fecharDialog() {
    this.dialog = false;
  }
}
