import { Injectable } from '@angular/core';
import { BASE_URL } from '../../environments/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class TipoComidasService {

  constructor() { }

  async getAll() {
    return axios.get(`${BASE_URL}/tipo-comidas`);
  }
}
