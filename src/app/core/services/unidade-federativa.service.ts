import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { UnidadeFederativa } from '../types/types';


@Injectable({
  providedIn: 'root'
})
export class UnidadeFederativaService {

  private readonly apiUrl: string = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }

  listarUnidadesFederativas(): Observable<UnidadeFederativa[]> {
    return this.http.get<UnidadeFederativa[]>(`${this.apiUrl}/estados`);
  }
}
