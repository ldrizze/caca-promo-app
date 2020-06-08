import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../api/favoritos.service';
import { TipoComidasService } from '../api/tipo-comidas.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  public favs;

  constructor(
    private favoritosService: FavoritosService,
    private tipoComidasService: TipoComidasService
  ) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.favs = [];
    const tiposComidaResult = await this.tipoComidasService.getAll();
    const favsResult = await this.favoritosService.get();

    if (tiposComidaResult.data.length > 0) {
      tiposComidaResult.data.forEach(tipo => {
        const fav = {
          id_tipo_comida: tipo.id,
          nome: tipo.nome,
          isFav: false
        };

        if (favsResult.data.length > 0) {
          favsResult.data.forEach(favorito => {
            if (favorito.id_tipo_comida === fav.id_tipo_comida) {
              fav.isFav = true;
            }
          });
        }

        this.favs.push(fav);
      });
    }
  }

  async toggleFav(fav) {
    fav.isFav = !fav.isFav;
    if (fav.isFav) {
      await this.favoritosService.post(fav.id_tipo_comida);
    } else {
      await this.favoritosService.delete(fav.id_tipo_comida);
    }
  }

}
