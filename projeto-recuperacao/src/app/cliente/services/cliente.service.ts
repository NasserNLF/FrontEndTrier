import { Injectable } from '@angular/core';
import { Cliente } from '../../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private id = 0;
  private clientes: Array<Cliente> = [];

  addClient(client: Cliente) {
    client.id = this.id;
    this.clientes.push(client);
    this.id++;
  }


  get getClientes() {
    console.log(this.clientes);
    return this.clientes;
  }

  findById(id: number): Cliente | undefined{
    return this.clientes.find(cliente => cliente.id == id);
  }





}
