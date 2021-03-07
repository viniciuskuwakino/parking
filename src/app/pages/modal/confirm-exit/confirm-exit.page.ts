import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-confirm-exit',
  templateUrl: './confirm-exit.page.html',
  styleUrls: ['./confirm-exit.page.scss'],
})
export class ConfirmExitPage implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  confirmExit() {

  }

  goBack() {

  }

  async back() {
    await this.modalController.dismiss();
  }
}
