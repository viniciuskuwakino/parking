import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-confirm-payment-modal',
  templateUrl: './confirm-payment-modal.page.html',
  styleUrls: ['./confirm-payment-modal.page.scss'],
})
export class ConfirmPaymentModalPage implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  confirm() {

  }

  async back() {
    await this.modalController.dismiss();
  }
}
