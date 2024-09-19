import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../models/cliente';
import { Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.scss'
})
export class ListagemComponent implements OnInit {

  clientes : Array<Cliente> = [];

  constructor(
    private router: Router,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.updateList();
  }

  updateList(){
    this.clientes = this.clienteService.getClientes;

  }

  editarItem(cliente : Cliente){
    this.router.navigate([`/cadastro/${cliente.id}`])
  }
}
