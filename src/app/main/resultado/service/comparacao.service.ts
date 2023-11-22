import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Comparacao, MaiorValor, Resultado} from "../model/resultado";

@Injectable({
  providedIn: 'root'
})
export class ComparacaoService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  getAllResultado(): Observable<Resultado[]> {
    const url = `${this.baseUrl}/resultado`;
    return this.http.get<Resultado[]>(url)
  }

  getMaiorValor(): Observable<MaiorValor[]> {
    const url = `${this.baseUrl}/maior-valor`;
    return this.http.get<MaiorValor[]>(url);
  }

  findById(id: number) {
    const url = `${this.baseUrl}/comparar/${id}`;
    return this.http.get<Comparacao>(url);

  }

  postResultado(id: number, comparacao: Comparacao) {
    const url = `${this.baseUrl}/comparar/${id}`;
    return this.http.post<Comparacao>(url, comparacao);
  }

  deleteResultado(id: number | undefined) {
    const url = `${this.baseUrl}/comparar/${id}`;
    return this.http.delete<void>(url);
  }

  putResultado(id: number, comparacao: Comparacao) {
    const url = `${this.baseUrl}/comparar/${id}`;
    return this.http.put<Comparacao>(url, comparacao)
  }
}


