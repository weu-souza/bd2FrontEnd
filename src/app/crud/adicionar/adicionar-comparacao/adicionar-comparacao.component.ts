import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-adicionar-comparacao',
  templateUrl: './adicionar-comparacao.component.html',
  styleUrls: ['./adicionar-comparacao.component.scss']
})
export class AdicionarComparacaoComponent implements OnInit {
  // @ts-ignore
  addComputador: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.addComputador = this.fb.group({
      processadorNota: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      processadorPeso: ['', [Validators.required, Validators.min(1), Validators.max(3)]],
      placaNota: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      placaPeso: ['', [Validators.required, Validators.min(1), Validators.max(3)]],
      ramPeso: ['', [Validators.required, Validators.min(1), Validators.max(3)]],
      ramNota: ['', [Validators.required, Validators.min(1), Validators.max(5)]],

    })
  }

  adicionar() {
    this.router.navigate(['/resultado'])
  }
}
