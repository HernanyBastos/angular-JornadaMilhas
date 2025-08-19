import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatChipSelectionChange } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Injectable({
  providedIn: 'root'
})


export class FormBuscarService {
  
  //Formulário reativo que armazenará os controles de busca
  public formBusca: FormGroup;

  //Injeção de dependência: disponibiliza o serviço de diálogo (MatDialog) para abrir modais
  constructor(private dialog: MatDialog,) {
    //Inicializando o FormGroup com os campos padrão da busca
    this.formBusca = new FormGroup({
      somenteIda: new FormControl(false),     //Controle: viagem só de ida (boolean)
      tipo: new FormControl('Executiva'),     //Controle: tipo de passagem (Executiva por padrão)
      adulto: new FormControl(1),             //Controle: quantidade de adultos (1 por padrão)
      crianca: new FormControl(0),            //Controle: quantidade de crianças
      bebe: new FormControl(0),               //Controle: quantidade de bebês
    });
  }

  //Obtém um controle específico do formulário pelo nome
  obterControle(nome: string): FormControl {
    return this.formBusca.get(nome) as FormControl;
  }

  //Gera uma descrição textual da quantidade de passageiros
  getDescricaoPassageiros(): string {
    let descricao = '';

    const adultos = this.formBusca.get('adulto')?.value;
    const crianca = this.formBusca.get('crianca')?.value;
    const bebe = this.formBusca.get('bebe')?.value;

    //Se houver adultos, adiciona na descrição (tratando singular/plural)
    if(adultos && adultos > 0) {
      descricao += adultos + ' Adulto' + (adultos > 1 ? 's' : '');
    } 

    //Se houver crianças, adiciona na descrição (tratando singular/plural)
    if(crianca && crianca > 0) {
      descricao += crianca + ' Crianca' + (crianca > 1 ? 's' : '');
    } 

    //Se houver bebês, adiciona na descrição (tratando singular/plural)
    if(bebe && bebe > 0) {
      descricao += bebe + ' Bebe' + (bebe > 1 ? 's' : '');
    }

    return descricao;
  }
  
  //Altera o tipo de passagem (Executiva, Econômica, etc.)
  //Quando um chip (MatChip) é selecionado, atualiza o campo "tipo" no formulário
  alterarTipo(evento: MatChipSelectionChange, tipo: string) {
    if (evento.selected) {
      this.formBusca.patchValue({
        tipo
      }),
      console.log("Deu certo!")
    }
  }

  //Abre um modal (componente ModalComponent) ocupando 50% da largura da tela
  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%'
    })
  }
}



