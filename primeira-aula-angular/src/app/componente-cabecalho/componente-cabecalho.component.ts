import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componente-cabecalho',
  templateUrl: './componente-cabecalho.component.html',
  styleUrl: './componente-cabecalho.component.scss'
})
export class ComponenteCabecalhoComponent {

  @Input() tituloDinamico? : string;
  @Output() pesquisa = new EventEmitter<string>();

  inputContent = '';

  enviarPesquisa(){
    this.pesquisa.emit(this.inputContent);
  }

}
