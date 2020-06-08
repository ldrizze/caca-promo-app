import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PromosService } from '../api/promos.service';
import { RestaurantesService } from '../api/restaurantes.service';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private promos: any = [];

  constructor(
    private menu: MenuController,
    private promosServie: PromosService,
    private restauranteService: RestaurantesService
  ) {
    this.menu.enable(true, 'main');
  }

  async ionViewWillEnter() {
    try {
      const result = await this.promosServie.getCurrent();
      for (const data of result.data) {
        const resResult = await this.restauranteService.get(data.id_restaurante);
        data.restaurante = resResult.data;
        data.data_inicio = moment(data.data_inicio).format('DD/MM/YYYY');
        data.data_fim = moment(data.data_fim).format('DD/MM/YYYY');
      }
      this.promos = result.data;
    } catch (error) {
      console.error(error);
    }
  }
}
