import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Entrada', url: '/folder/Inbox'},
    { title: 'Saída', url: '/folder/Outbox'},
  ];
  constructor() {}
}
