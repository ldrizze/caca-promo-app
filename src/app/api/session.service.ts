import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private baseUrl = 'http://localhost:3000';
  private token: string;
  private user: any;

  async cadastrar(data) {
    return axios.post(`${this.baseUrl}/users`, data);
  }

  async login(usuario, senha) {
    const data: any = await axios.post(`${this.baseUrl}/session`, {
      usuario, senha
    });
    if (data && data.token) {
      this.token = data.token;
    }
  }

  async getUserInfo() {
    const data = await axios({
      headers: {
        Authorization: this.token
      },
      method: 'GET',
      url: `${this.baseUrl}/session/me`
    });

    this.user = data;
  }

  getUser() {
    return this.user;
  }

  logout() {
    this.token = null;
  }
}
