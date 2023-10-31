import {Component, OnInit} from '@angular/core';
import {Comparacao} from "../../../main/resultado/model/resultado";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {ComparacaoService} from "../../../main/resultado/service/comparacao.service";

@Component({
  selector: 'app-atualizarcomparacao',
  templateUrl: './atualizarcomparacao.component.html',
  styleUrls: ['./atualizarcomparacao.component.scss']
})
export class AtualizarcomparacaoComponent implements OnInit {
  // @ts-ignore
  addComputador: FormGroup;

  comparar: Comparacao = new Comparacao();
  dialog: boolean = false;
  dialogMsg: string = '';
  id: number = 0

  constructor(private router: Router, private fb: FormBuilder, private comparacaoService: ComparacaoService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.findById();
  }

  findById() {
    this.comparar.id = Number(this.route.snapshot.paramMap.get('id'));
    this.comparacaoService.findById(this.comparar.id).subscribe(res => {
      this.addComputador = this.fb.group({
        processadorNota: [res.processadorNota, [Validators.required, Validators.min(1), Validators.max(5)]],
        processadorPeso: [res.processadorPeso, [Validators.required, Validators.min(1), Validators.max(3)]],
        placaDeVideoNota: [res.placaDeVideoNota, [Validators.required, Validators.min(1), Validators.max(5)]],
        placaDeVideoPeso: [res.placaDeVideoPeso, [Validators.required, Validators.min(1), Validators.max(3)]],
        memoriaRamPeso: [res.memoriaRamPeso, [Validators.required, Validators.min(1), Validators.max(3)]],
        memoriaRamNota: [res.memoriaRamNota, [Validators.required, Validators.min(1), Validators.max(5)]],
      })
    });
  }

  atualizar() {
    if (this.addComputador.dirty && this.addComputador.valid) {
      this.comparar = Object.assign({}, this.comparar, this.addComputador.value);
      this.id = Number(this.route.snapshot.paramMap.get('id'));
      this.comparacaoService.putResultado(this.id, this.comparar).subscribe(res => {
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
