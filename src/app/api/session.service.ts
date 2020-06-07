import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private baseUrl = 'http://localhost:3000';

  constructor() { }

  async cadastrar(data) {
    return axios.post(`${this.baseUrl}/users`, data);
  }
}
