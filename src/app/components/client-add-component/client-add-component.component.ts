import { Component, OnInit, Input, NgModule} from '@angular/core';

import { Client } from 'src/app/models/client';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-client-add-component',
  templateUrl: './client-add-component.component.html',
  styleUrls: ['./client-add-component.component.css']
})
export class ClientAddComponentComponent implements OnInit{

  @Input()
  clientList : Array<Client> = [];
  //clientList : Array<Client> = [];
  firstName : string = "";
  lastName : string = "";
  dni : string = '';
  

  @Input() clienteExistente: Client | null = null;

  ngOnInit(): void {
  
}  



  add_client()
  {
    // if (this.clienteExistente) {
    //   console.log(this.clienteExistente);
    //   // Modo de edición: Actualiza el cliente existente
    //   this.clienteExistente.firstName = this.firstName;
    //   this.clienteExistente.dni = this.dni;
     
  
    //   console.log('Cliente actualizado:', this.clienteExistente);
    // } else {
      // Modo de creación: Agrega un nuevo cliente
      const newClient = new Client();
      newClient.clientId = uuidv4();
      newClient.firstName = this.firstName;
      newClient.dni = this.dni;
      // Otros campos deben configurarse aquí
  
      this.clientList.push(newClient);
      console.log('Nuevo cliente agregado:', newClient);
   // }
  
    // Restablece los campos de entrada
    this.firstName = '';
    this.dni = '';
    // Otros campos deben restablecerse aquí
  }





}
