import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormBuscarService } from 'src/app/core/services/form-buscar.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})
export class FormBuscaComponent {

form = new FormGroup({
  uf: new FormControl('')
});

  constructor(
    public dialog: MatDialog,
    public formBuscarService: FormBuscarService
  ) { }

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%'
    })
  }
}
