import { Injectable } from '@angular/core';
import axios from 'axios';
import { BASE_URL } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromosService {

  constructor() { }

  async getCurrent() {
    return axios.get(`${BASE_URL}/current-promos`);
  }
}
