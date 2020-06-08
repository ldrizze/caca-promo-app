import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from '../api/restaurantes.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.page.html',
  styleUrls: ['./restaurantes.page.scss'],
})
export class RestaurantesPage implements OnInit {

  public restaurantes = [];

  constructor(
    private restaurantesService: RestaurantesService
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    const result = await this.restaurantesService.getAll();
    result.data.map(data => {
      data.numero_de_promocoes = data.promocoes.length;
    });

    this.restaurantes = result.data;
  }

  aoClicarNoCoracaozinho(el) {
    const clickedIndex = Array.from(el.target.parentNode.children).indexOf(el.target);
    for (let i = 0; i <= 4; i++) {
      el.target.parentNode.children[i].classList.remove('scored');
    }
    for (let i = 0; i <= clickedIndex; i++) {
      el.target.parentNode.children[i].classList.add('scored');
    }
  }

}
