import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuscarService {

  formBusca: FormGroup;

  constructor() { 

    this.formBusca = new FormGroup({
      // Define os controles do formulário aqui, por exemplo:
      somenteIda: new FormControl(false),
      // destino: new FormControl(''),
      // precoMinimo: new FormControl(''),
      // precoMaximo: new FormControl(''),
      // dataIda: new FormControl(''),
      // dataVolta: new FormControl('')
    });
  }
}
