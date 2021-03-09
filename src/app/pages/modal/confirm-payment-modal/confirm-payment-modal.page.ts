import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Status} from '../../../enums/status';

@Component({
  selector: 'app-confirm-payment-modal',
  templateUrl: './confirm-payment-modal.page.html',
  styleUrls: ['./confirm-payment-modal.page.scss'],
})
export class ConfirmPaymentModalPage implements OnInit {
  hiddenText: boolean;
  status: string;

  constructor(
    private modalController: ModalController
  ) {
    this.hiddenText = false;
    this.status = Status.showText;
  }

  ngOnInit() {
  }

  async confirm() {
    this.status = Status.confirming;
    setTimeout(() => {
      this.status = Status.success;
    }, 3000);
  }

  async back() {
    await this.modalController.dismiss();
  }
}
