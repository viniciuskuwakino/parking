import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayedPageRoutingModule } from './payed-routing.module';

import { PayedPage } from './payed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayedPageRoutingModule
  ],
  declarations: [PayedPage]
})
export class PayedPageModule {}
