import {Injectable} from '@angular/core';

import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {Computador} from "../model/computador";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ComputadorService {
  baseUrl: string = environment.baseUrl;


  constructor(private http: HttpClient) {

  }

  getAllComputador(): Observable<Computador[]> {
    const url = `${this.baseUrl}/computador`;
    return this.http.get<Computador[]>(url)
  }

  findById(id: number): Observable<Computador> {
    const url = `${this.baseUrl}/computador/${id}`;
    return this.http.get<Computador>(url);
  }

  postComputador(computador: Computador): Observable<Computador> {
    const url = `${this.baseUrl}/computador`;
    return this.http.post(url, computador)

  }

  deleteComputador(id: number | undefined): Observable<void> {
    const url = `${this.baseUrl}/computador/${id}`;
    return this.http.delete<void>(url)
  }

  putComputador(computador: Computador): Observable<void> {
    const url = `${this.baseUrl}/computador/${computador.id}`;
    return this.http.put<void>(url, computador)
  }

}
