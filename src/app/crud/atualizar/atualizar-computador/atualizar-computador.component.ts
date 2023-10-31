import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ComputadorService} from "../../../main/main/service/computador.service";
import {Computador} from "../../../main/main/model/computador";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-atualizar-computador',
  templateUrl: './atualizar-computador.component.html',
  styleUrls: ['./atualizar-computador.component.scss']
})
export class AtualizarComputadorComponent implements OnInit {
  computador: Computador = new Computador();
  // @ts-ignore
  addComputador: FormGroup;
  dialog: boolean = false;
  dialogMsg: string = '';

  constructor(private fb: FormBuilder, private computadorService: ComputadorService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.findById();
  }

  findById() {
    this.computador.id = Number(this.route.snapshot.paramMap.get('id'));
    this.computadorService.findById(this.computador.id).subscribe(res => {
      this.addComputador = this.fb.group({
        nome: [res.nome, [Validators.required]],
        descricao: [res.descricao, [Validators.required]]
      })
    });
  }


  fecharDialog() {
    this.dialog = false;
    this.router.navigate(['/inicio'])
  }

  atualizar() {
    if (this.addComputador.dirty && this.addComputador.valid) {
      this.computador = Object.assign({}, this.computador, this.addComputador.value);
      this.computadorService.putComputador(this.computador).subscribe(res => {
        this.dialogMsg = 'Enviado com sucesso!!!';
        this.dialog = true;
      })
    } else {
      this.dialogMsg = 'Altere o formulario!!!';
      this.dialog = true;
    }
    setTimeout(() => {
      this.dialog = false;
    }, 2000);
  }
}
