import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Comparacao} from "../../../main/resultado/model/resultado";
import {ComparacaoService} from "../../../main/resultado/service/comparacao.service";

@Component({
  selector: 'app-adicionar-comparacao',
  templateUrl: './adicionar-comparacao.component.html',
  styleUrls: ['./adicionar-comparacao.component.scss']
})
export class AdicionarComparacaoComponent implements OnInit {
  // @ts-ignore
  addComputador: FormGroup;
  comparar: Comparacao = new Comparacao();
  dialog: boolean = false;
  dialogMsg: string = '';
  id: number = 0

  constructor(private router: Router, private fb: FormBuilder, private comparacaoService: ComparacaoService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.addComputador = this.fb.group({
      processadorNota: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      processadorPeso: ['', [Validators.required, Validators.min(1), Validators.max(3)]],
      placaDeVideoNota: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      placaDeVideoPeso: ['', [Validators.required, Validators.min(1), Validators.max(3)]],
      memoriaRamPeso: ['', [Validators.required, Validators.min(1), Validators.max(3)]],
      memoriaRamNota: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
    })
  }

  adicionar() {
    if (this.addComputador.dirty && this.addComputador.valid) {
      this.comparar = Object.assign({}, this.comparar, this.addComputador.value);
      this.id = Number(this.route.snapshot.paramMap.get('id'));
      this.comparacaoService.postResultado(this.id, this.comparar).subscribe(res => {
        this.dialogMsg = 'Enviado com sucesso!!!';
        this.dialog = true;
      })
    } else {
      this.dialogMsg = 'Preencha o formulario!!!';
      this.dialog = true;
    }
    setTimeout(() => {
      this.dialog = false;
    }, 2000);
  }

  fecharDialog() {
    this.dialog = false
    this.router.navigate(['/resultado'])
  }
}
