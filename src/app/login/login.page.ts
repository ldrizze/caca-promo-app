import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login = {};

  constructor(
    private router: Router,
    private menu: MenuController
  ) {
    this.menu.enable(false, 'main');
  }

  ngOnInit() {
  }

  logForm() {
    this.router.navigateByUrl('/home');
  }

}
