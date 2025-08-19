import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { UnidadeFederativa } from '../types/types';


@Injectable({
  providedIn: 'root'
})

export class UnidadeFederativaService {

  //Armazena a URL base da API definida no arquivo de configuração "environment"
  private readonly apiUrl: string = environment.apiUrl

  //Injeção de dependência: disponibilizando o HttpClient para realizar requisições HTTP
  constructor(
    private http: HttpClient
  ) { }

  //Listando Unidades Federativas:
  //Faz uma requisição GET para o endpoint "/estados" da API
  //O Observable retorna uma lista de objetos do tipo UnidadeFederativa
  listarUnidadesFederativas(): Observable<UnidadeFederativa[]> {
    return this.http.get<UnidadeFederativa[]>(`${this.apiUrl}/estados`);
  }
}

