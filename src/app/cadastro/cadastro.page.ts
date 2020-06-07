import { Component, OnInit } from '@angular/core';
import { SessionService } from '../api/session.service';
import { LoadingController, NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  public cadastro = {
    nome: null,
    usuario: null,
    email: null,
    senha: null,
    resenha: null
  };

  public msgs = {
    nome: null,
    usuario: null,
    email: null,
    senha: null,
    resenha: null
  };

  private loading: HTMLIonLoadingElement;
  private alert: HTMLIonAlertElement;

  constructor(
    private sessionService: SessionService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private navController: NavController
  ) { }

  ngOnInit() {
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Cadastrando, por favor, aguarde...'
    });
    this.loading.present();
  }

  async presentAlert() {
    this.alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atenção!',
      message: 'Houver um erro ao realizar seu cadastro, por favor, reveja os dados inseridos.',
      buttons: ['OK']
    });
    this.alert.present();
  }

  async cadastrar() {
    let valid = true;

    if (!this.cadastro.nome) {
      valid =  false;
      this.msgs.nome = 'Campo inválido';
    } else {
      this.msgs.nome = null;
    }

    if (!this.cadastro.usuario) {
      valid =  false;
      this.msgs.usuario = 'Campo inválido';
    } else {
      this.msgs.usuario = null;
    }

    if (!this.cadastro.email) {
      valid =  false;
      this.msgs.email = 'Campo inválido';
    } else {
      this.msgs.email = null;
    }

    if (!this.cadastro.senha) {
      valid =  false;
      this.msgs.senha = 'Campo inválido';
    }

    if (!this.cadastro.resenha) {
      valid =  false;
      this.msgs.resenha = 'Campo inválido';
    }

    if (this.cadastro.senha && this.cadastro.resenha) {
      if (this.cadastro.senha !== this.cadastro.resenha) {
        valid =  false;
        this.msgs.senha = 'Senha e repita a senha não são iguais';
        this.msgs.resenha = 'Senha e repita a senha não são iguais';
      } else {
        this.msgs.senha = null;
        this.msgs.resenha = null;
      }
    }

    console.log(this.cadastro);

    if (valid) {
      await this.presentLoading();
      try {
        await this.sessionService.cadastrar(this.cadastro);
        this.navController.back();
      } catch (error) {
        console.log(error);
        await this.presentAlert();
      } finally {
        this.loading.dismiss();
      }
    }
  }
}
