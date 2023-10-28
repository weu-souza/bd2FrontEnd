import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-adicionar-comparacao',
  templateUrl: './adicionar-comparacao.component.html',
  styleUrls: ['./adicionar-comparacao.component.scss']
})
export class AdicionarComparacaoComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  adicionar() {
    this.router.navigate(['/resultado'])
  }
}
