import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro-componente',
  templateUrl: './meu-primeiro-componente.component.html',
  styleUrl: './meu-primeiro-componente.component.scss'
})
export class MeuPrimeiroComponenteComponent {
  //FILHO
  @Input() titulo? : string;
  @Output() botaoClicado = new EventEmitter<string>();

  enviar(){
    this.botaoClicado.emit('Botão clicado');
  }
}
