import { Component, Input, OnInit } from '@angular/core';
import { FormControl, } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { UnidadeFederativaService } from 'src/app/core/services/unidade-federativa.service';
import { UnidadeFederativa } from 'src/app/core/types/types';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss']
})


export class DropdownUfComponent implements OnInit {

  myControl = new FormControl('');
  options: string[] = [];
  unidadesFederativas: UnidadeFederativa[] = [];

  @Input() label: string = '';
  @Input() iconePrefixo: string = '';

  filteredOptions!: Observable<string[]>;

  constructor(private unidadeFederativaService: UnidadeFederativaService) { }

  ngOnInit(): void {
    this.unidadeFederativaService.listarUnidadesFederativas().subscribe(dados => {
      this.unidadesFederativas = dados;
      this.options = this.unidadesFederativas.map(uf => uf.nome); // ou uf.sigla
    });

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
