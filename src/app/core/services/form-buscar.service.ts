import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatChipSelectionChange } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Injectable({
  providedIn: 'root'
})

export class FormBuscarService {
  public formBusca: FormGroup;


  constructor(private dialog: MatDialog,) {
    this.formBusca = new FormGroup({
      somenteIda: new FormControl(false),
      tipo: new FormControl('Executiva'),
      adulto: new FormControl(1),
      crianca: new FormControl(0),
      bebe: new FormControl(0),
    });
  }

    obterControle(nome: string): FormControl {
    return this.formBusca.get(nome) as FormControl;
  }

  getDescricaoPassageiros(): string {
    let descricao = '';

    const adultos = this.formBusca.get('adulto')?.value;
    const crianca = this.formBusca.get('crianca')?.value;
    const bebe = this.formBusca.get('bebe')?.value;

    if(adultos && adultos > 0) {
      descricao += adultos + ' Adulto' + (adultos > 1 ? 's' : '');
    } 

    if(crianca && crianca > 0) {
      descricao += crianca + ' Crianca' + (crianca > 1 ? 's' : '');
    } 

    if(bebe && bebe > 0) {
      descricao += bebe + ' Bebe' + (bebe > 1 ? 's' : '');
    }

    return descricao;
}
  
  alterarTipo(evento: MatChipSelectionChange, tipo: string) {
    if (evento.selected) {
      this.formBusca.patchValue({
        tipo
      }),
      console.log("Deu certo!")
    }
  }
      openDialog() {
      this.dialog.open(ModalComponent, {
        width: '50%'
      })
    }

}


