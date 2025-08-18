import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuscarService } from 'src/app/core/services/form-buscar.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor(public formBuscarService: FormBuscarService, private dialog: MatDialog) { }

}
