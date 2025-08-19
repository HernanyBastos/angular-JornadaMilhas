import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-seletor-passageiro',
  templateUrl: './seletor-passageiro.component.html',
  styleUrls: ['./seletor-passageiro.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SeletorPassageiroComponent,
      multi: true
    }
  ]
})
export class SeletorPassageiroComponent implements ControlValueAccessor {

  @Input() titulo: string = '';
  @Input() subtitulo: string = '';
  
  value: number = 0;

onChange = (valor: number) => {

}
onTouched = () => {}

  writeValue(valor: any): void {
    this.value = valor
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  //setDisabledState?(isDisabled: boolean): void {
    //throw new Error('Method not implemented.');
  //}

  decrementar() {
    if (this.value > 0) {
      this.value -= 1
      this.onChange(this.value)
      this.onTouched()
    }
  }

  incrementar() {
    this.value += 1
    this.onChange(this.value)
    this.onTouched()
  }

}
