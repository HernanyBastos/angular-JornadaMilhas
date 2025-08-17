import { Component, OnInit } from '@angular/core';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { DepoimentosService } from 'src/app/core/services/depoimentos.service';
import { Depoimentos, Promocao } from 'src/app/core/types/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  depoimentos: Depoimentos[] = [];
  promocoes: Promocao[] = [];

  constructor(
    private promocaoService: PromocaoService,
    private depoimentosService: DepoimentosService
  ) {}

  ngOnInit(): void {
    // buscar depoimentos
    this.depoimentosService.depoimentos().subscribe({
      next: (lista: Depoimentos[]) => (this.depoimentos = lista),
      error: (err: any) => console.error('Erro ao obter depoimentos:', err),
    });

    // buscar promoções
    this.promocaoService.listarPromocoes().subscribe({
      next: (lista: Promocao[]) => (this.promocoes = lista),
      error: (err: any) => console.error('Erro ao obter promoções:', err),
    });
  }
}
