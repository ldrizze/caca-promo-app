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

  public login = {
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
  ) { }

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

  ionViewWillEnter() {
    this.menu.enable(false, 'main');
  }

  async loginForm() {
    try {
      await this.presentLoading();
      await this.sessionService.login(this.login.usuario, this.login.senha);
      this.menu.enable(true, 'main');
      this.router.navigateByUrl('/home');
      this.login = {
        usuario: null,
        senha: null
      };
    } catch (error) {
      console.log(error);
      await this.presentAlert();
    } finally {
      this.loading.dismiss();
    }
  }
}
