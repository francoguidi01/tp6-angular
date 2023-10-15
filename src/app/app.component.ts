import { Component, Input, NgModule, Output, EventEmitter } from '@angular/core';
import { Client } from './models/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'tp_6_angular';
  clientList: Array<Client> = [];
  @Input()
  edit_client(clientData: Client) {
    console.log('me vuelvo loco');
    console.log(clientData);
    this.send_client(clientData);
  }
  @Output()
  edit_client_event = new EventEmitter<Client>();
  send_client(client: Client) {
    this.edit_client_event.emit(client);
  }


}
