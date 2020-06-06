import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  mocks = [1, 2, 3];

  constructor(private menu: MenuController) {
    this.menu.enable(true, 'main');
  }

}
