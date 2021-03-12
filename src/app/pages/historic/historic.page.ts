import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.page.html',
  styleUrls: ['./historic.page.scss'],
})
export class HistoricPage implements OnInit {
  historic: any[];
  constructor(
    private router: Router
  ) {
    this.historic = [
      {time: '1h20', payed: '-'},
      {time: '2h', payed: 'Pago'},
      {time: '1h10', payed: 'Pago'},
      {time: '2h10', payed: 'Pago'},
    ];
  }

  ngOnInit() {
  }

  async backHome() {
    await this.router.navigateByUrl('/folder/Inbox');
  }
}
