import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import { Resultado} from "../model/resultado";

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

}


