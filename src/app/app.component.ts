import { Component, NgModule } from '@angular/core';
import { Client } from './models/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'tp_6_angular';
  clientList : Array<Client> = [];
  clientToEdit: Client = new Client;
  hola(clientList: Array<Client>)
  {

    console.log('este es el arreglo aca ya pasado');
    console.log(clientList);
  }

}
