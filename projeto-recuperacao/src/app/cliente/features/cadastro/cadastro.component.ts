import { Cliente } from './../../../models/cliente';
import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

  id?: number;
  nome?: string;
  idade?: number;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService
  ){
    this.activeRoute.params.subscribe(valores => {
      const cliente : Cliente | undefined = this.clienteService.findById(valores['id']);
      this.editaCliente(cliente);
    })
  }

  cadastrarCliente(){
    console.log("To aqui");
    if(this.nome && this.idade && !this.id){
      this.clienteService.addClient({nome : this.nome, idade : this.idade})
    }
  }

  editaCliente(cliente? : Cliente){
    if(cliente){
      this.id = cliente.id;
      this.nome = cliente.nome;
      this.idade = cliente.idade;
    }
  }
}
