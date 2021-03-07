import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayedPage } from './payed.page';

const routes: Routes = [
  {
    path: '',
    component: PayedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayedPageRoutingModule {}
