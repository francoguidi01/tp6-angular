import { Injectable } from '@angular/core';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  public sharedData: any;

  constructor() { }


}
