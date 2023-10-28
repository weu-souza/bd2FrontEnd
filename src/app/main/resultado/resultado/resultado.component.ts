import {Component, OnInit} from '@angular/core';
import {Resultado} from "./model/resultado";


@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {
  resultado: Resultado[] = []

  constructor() {
  }

  ngOnInit(): void {
  }

}
