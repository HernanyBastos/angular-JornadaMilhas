import { Component, Input, OnInit } from '@angular/core';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { Promocao } from 'src/app/core/types/types';

@Component({
  selector: 'app-card-busca',
  templateUrl: './card-busca.component.html',
  styleUrls: ['./card-busca.component.scss']
})
export class CardBuscaComponent implements OnInit {

  promocoes: Promocao[] = [];

  @Input() promocao!: Promocao


  constructor(
    private promocaoService: PromocaoService
  ) { } 

  ngOnInit(): void {
    this.promocaoService.listarPromocoes().subscribe({
      next: (res) => this.promocoes = res,
      error: (err) => console.error('Erro ao listar promoções:', err)
    })
  }


}
