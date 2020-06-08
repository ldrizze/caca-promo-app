import { Injectable } from '@angular/core';
import axios from 'axios';
import { BASE_URL } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {

  constructor() { }

  async get(id) {
    return axios.get(`${BASE_URL}/restaurantes/${id}`);
  }

  async getAll() {
    return axios.get(`${BASE_URL}/restaurantes`);
  }
}
