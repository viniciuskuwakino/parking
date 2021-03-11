import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RequestsService {
  url = 'https://parking-lot-to-pfz.herokuapp.com/parking';

  constructor() {}

/*  registerPayment(id: string) {
    this.http.post(this.url, id);
  }*/

  registerExit() {

  }

  showHistoric() {

  }
}
