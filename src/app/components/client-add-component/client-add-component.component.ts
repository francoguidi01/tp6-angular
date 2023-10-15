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
  
  @Input() client_to_edit : Client = new Client();
  @Input() modoEdicion: boolean = false;
  ngOnInit(): void {
}  



  add_client()
  {
     if (this.modoEdicion) {
       if(this.client_to_edit)
       {
         this.client_to_edit.firstName = this.firstName;
         this.client_to_edit.dni = this.dni;
         console.log('Cliente actualizado:', this.client_to_edit);
       }
    } else {
     
      const newClient = new Client();
      newClient.clientId = uuidv4();
      newClient.firstName = this.firstName;
      newClient.dni = this.dni;
       
      this.clientList.push(newClient);
    }
    this.firstName = '';
    this.dni = '';
    
  }

edit_client(client : Client)
{

}



}
