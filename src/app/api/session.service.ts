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
      this.getUserInfo();
    }
  }

  async cadastrar(data) {
    return axios.post(`${BASE_URL}/users`, data);
  }

  async login(usuario, senha) {
    const result = await axios.post(`${BASE_URL}/session`, {
      usuario, senha
    });
    if (result && result.data.token) {
      this.token = result.data.token;
      localStorage.setItem('token', this.token);
    }
  }

  async getUserInfo() {
    const result = await axios({
      headers: {
        Authorization: this.token
      },
      method: 'GET',
      url: `${BASE_URL}/session/me`
    });

    this.user = result.data;
  }

  async getUser() {
    if (!this.user) {
      await this.getUserInfo();
    }
    return this.user;
  }

  getToken() {
    return this.token;
  }

  logout() {
    this.token = null;
  }
}
