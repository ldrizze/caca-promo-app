import { Injectable } from '@angular/core';
import axios from 'axios';
import { BASE_URL } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private token: string;
  private user: any;

  constructor() {
    this.token = localStorage.getItem('token');
    if (!this.token) {
      this.token = null;
    } else {
      this.getUser();
    }
  }

  async cadastrar(data) {
    return axios.post(`${BASE_URL}/users`, data);
  }

  async login(usuario, senha) {
    const data: any = await axios.post(`${BASE_URL}/session`, {
      usuario, senha
    });
    if (data && data.token) {
      this.token = data.token;
      localStorage.setItem('token', this.token);
    }
  }

  async getUserInfo() {
    const data = await axios({
      headers: {
        Authorization: this.token
      },
      method: 'GET',
      url: `${BASE_URL}/session/me`
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
