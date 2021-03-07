import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmPaymentModalPage } from './confirm-payment-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmPaymentModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmPaymentModalPageRoutingModule {}
