import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmPaymentModalPageRoutingModule } from './confirm-payment-modal-routing.module';

import { ConfirmPaymentModalPage } from './confirm-payment-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmPaymentModalPageRoutingModule
  ],
  declarations: [ConfirmPaymentModalPage]
})
export class ConfirmPaymentModalPageModule {}
