import { Component } from '@angular/core';

@Component({
  selector: 'app-component-formulario',
  templateUrl: './component-formulario.component.html',
  styleUrl: './component-formulario.component.scss'
})
export class ComponentFormularioComponent {
  nome = '';
  email = '';
  telefone = '';

  emiteAlerta(){
    alert("Enviado");
  }
}


