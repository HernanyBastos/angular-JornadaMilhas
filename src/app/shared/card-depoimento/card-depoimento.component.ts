import { Component, Input, OnInit } from '@angular/core';
import { DepoimentosService } from 'src/app/core/services/depoimentos.service';
import { Depoimentos } from 'src/app/core/types/types';

@Component({
  selector: 'app-card-depoimento',
  templateUrl: './card-depoimento.component.html',
  styleUrls: ['./card-depoimento.component.scss']
})
export class CardDepoimentoComponent {
    
    @Input() depoimento!: Depoimentos;

}
