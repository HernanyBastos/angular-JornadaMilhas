import { Component } from '@angular/core';
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
    public formBuscarService: FormBuscarService
  ) { }


  buscar(){
    console.log(this.formBuscarService.formBusca.value);
  }
}
