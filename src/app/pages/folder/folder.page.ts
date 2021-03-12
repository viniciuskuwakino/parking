import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {IonSegment, ModalController} from '@ionic/angular';
import {Plate} from '../../models/plate';
import {FormValidatorBase} from 'src/app/helpers/customFormValidator';
import {ConfirmPaymentModalPage} from '../modal/confirm-payment-modal/confirm-payment-modal.page';
import {ConfirmExitPage} from '../modal/confirm-exit/confirm-exit.page';
import {RequestsService} from '../../services/api/requests.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage extends FormValidatorBase implements OnInit {
  @ViewChild('segment', {static: false}) segment: IonSegment;
  folder: string;
  type: string;
  carModel: Plate;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    public modalController: ModalController,
    private router: Router,
    private requestService: RequestsService
  ) {
    super();
    this.type = 'entrance';
    this.submitted = false;
    this.carModel = new Plate();
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.parkingEnterForm = this.formBuilder.group({
      carEnterPlate: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(8)
        ]
      ],
    });

    this.parkingExitForm = this.formBuilder.group({
      carExitPlate: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(8)
        ]
      ],
    });
  }

  segmentChanged(event: any) {
    console.log(event.detail.value);
  }

  enter() {
    this.submitted = true;
    if (this.parkingEnterForm) {
      console.log('enter valid');
    }
  }

  async payment() {
    this.submitted = true;
    if (this.parkingExitForm.valid) {
      const modal = await this.modalController.create({
        component: ConfirmPaymentModalPage,
        cssClass: 'medium-modal'
      });
      return await modal.present();

    }
  }

  async exit() {
    const modal = await this.modalController.create({
      component: ConfirmExitPage,
      cssClass: 'medium-modal'
    });
    return await modal.present();
  }

  async seeHistoric() {
    await this.router.navigateByUrl('/historic');
  }
}
