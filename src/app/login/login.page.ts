import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LoadingController, AlertController } from '@ionic/angular';
import { SessionService } from '../api/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login = {
    usuario: null,
    senha: null
  };

  private loading: HTMLIonLoadingElement;
  private alert: HTMLIonAlertElement;

  constructor(
    private router: Router,
    private menu: MenuController,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public sessionService: SessionService
  ) {
    this.menu.enable(false, 'main');
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Autenticando...'
    });
    this.loading.present();
  }

  async presentAlert() {
    this.alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Dados inválidos',
      message: 'Seus dados estão inválidos.',
      buttons: ['OK']
    });
    this.alert.present();
  }

  ngOnInit() {
  }

  async logForm() {
    try {
      await this.presentLoading();
      await this.sessionService.login(this.login.usuario, this.login.senha);
      this.menu.enable(true, 'main');
      this.router.navigateByUrl('/home');
    } catch (error) {
      console.log(error);
      await this.presentAlert();
    }
  }
}
