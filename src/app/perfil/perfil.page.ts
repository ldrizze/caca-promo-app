import { Component, OnInit } from '@angular/core';
import { SessionService } from '../api/session.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  public perfil = {};

  constructor(
    private sessionService: SessionService
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.perfil = await this.sessionService.getUser();
  }

}
