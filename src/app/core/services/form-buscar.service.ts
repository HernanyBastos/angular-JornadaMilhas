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
    });
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


