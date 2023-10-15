import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from 'src/app/models/client';
@Component({
  selector: 'app-client-list-component',
  templateUrl: './client-list-component.component.html',
  styleUrls: ['./client-list-component.component.css']
})
export class ClientListComponentComponent implements OnInit {

  @Input()
  clientList: Array<Client> = [];
  clientToEdit: Client | null = null;

  ngOnInit() {

  }

  delete_client(id_client: string) {
    const index = this.clientList.findIndex(client => client.clientId === id_client);
    if (index !== -1) {
      this.clientList.splice(index, 1); // Elimina el cliente en el índice encontrado
    }
  }

  @Output()
  selected_client_to_edit_event = new EventEmitter<Client>();

  select_client_to_edit(client: Client) {
    this.selected_client_to_edit_event.emit(client);
  }


}
