import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class AutenticacaoService {

  //Consumindo a API: recuperando a URL base definida no arquivo de configuração "environment"
  private apiUrl = environment.apiUrl;

  //Injeção de dependência: disponibilizando o HttpClient para fazer requisições HTTP
  constructor(private http: HttpClient) { }

  //Realizando o login:
  //Envia uma requisição POST para a API com o e-mail e a senha.
  //Retorna um Observable, que será responsável por escutar e emitir a resposta da API.
  autenticar(email: string, senha: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, { email, senha });
  }
}

