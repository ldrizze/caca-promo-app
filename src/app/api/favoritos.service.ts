import { Injectable } from '@angular/core';
import axios from 'axios';
import { BASE_URL } from '../../environments/environment';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  constructor(
    private sessionService: SessionService
  ) { }

  async get() {
    const user = await this.sessionService.getUser();
    return axios.get(`${BASE_URL}/users/${user.id}/favs`, {
      headers: {
        Authorization: this.sessionService.getToken()
      }
    });
  }

  async post(id) {
    const user = await this.sessionService.getUser();
    return axios.post(`${BASE_URL}/users/${user.id}/favs/${id}`, null, {
      headers: {
        Authorization: this.sessionService.getToken()
      }
    });
  }

  async delete(id) {
    const user = await this.sessionService.getUser();
    return axios.delete(`${BASE_URL}/users/${user.id}/favs/${id}`, {
      headers: {
        Authorization: this.sessionService.getToken()
      }
    });
  }
}
