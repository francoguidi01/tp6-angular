import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
@Component({
  selector: 'app-client-list-component',
  templateUrl: './client-list-component.component.html',
  styleUrls: ['./client-list-component.component.css']
})
export class ClientListComponentComponent implements OnInit{

  @Input()
  clientList : Array<Client> = [];
  clientToEdit: Client | null = null;   

  ngOnInit(){

  }

  delete_client(id_client: string) {
    const index = this.clientList.findIndex(client => client.clientId === id_client);
    if (index !== -1) {
      this.clientList.splice(index, 1); // Elimina el cliente en el índice encontrado
    }
    console.log(this.clientList);
  }

  editarCliente(clientToEdit: Client) {
    this.clientToEdit = clientToEdit;
    console.log('hola3'); // Asigna el cliente a la propiedad clienteEnEdicion
  }


}
