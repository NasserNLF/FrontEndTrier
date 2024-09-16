import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component-formulario-cliente',
  templateUrl: './component-formulario-cliente.component.html',
  styleUrl: './component-formulario-cliente.component.scss'
})
export class ComponentFormularioClienteComponent {
  @Output() cliente = new EventEmitter<object>();

  nome = '';
  email = '';
  telefone = '';

  enviaCliente(){
    this.cliente.emit({nome : this.nome, email: this.email, telefone: this.telefone});
  }


}
