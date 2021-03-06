import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {IonSegment} from '@ionic/angular';
import {Plate} from '../models/plate';
import { FormValidatorBase } from 'src/app/helpers/customFormValidator';
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
    private formBuilder: FormBuilder
  ) {
    super();
    this.type = 'entrance';
    this.submitted = false;
    this.carModel = new Plate();
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.parkingForm = this.formBuilder.group({
      carEnterPlate: [
        '',
        [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(7)
        ]
      ],
      carExitPlate: [
        '',
        [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(7)
        ]
      ],
    });
  }

  segmentChanged(event: any) {}

  enter() {
    this.submitted = true;
  }

  payment() {
    this.submitted = true;
  }

  exit() {

  }

  seeHistoric() {

  }

  isEnable() {

  }
}
