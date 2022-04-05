import { API_TOURNAMENTS_URL } from '../constants/api';
import { ITournament } from './types';

export class HttpClient {
  async fetchTournaments(query?: string): Promise<ITournament[]> {
    let resp: any;

    if (query) {
      resp = await fetch(`${API_TOURNAMENTS_URL}?q=${query}`);

      return resp.json();
    }

    resp = await fetch(API_TOURNAMENTS_URL);

    return resp.json();
  }

  async editTournament(id: string, body: any): Promise<ITournament> {
    const resp = await fetch(`${API_TOURNAMENTS_URL}/${id}`, {
      method: 'PATCH',
      body
    });

    return resp.json();
  }

  async deleteTournament(id: string): Promise<{}> {
    const resp = await fetch(`${API_TOURNAMENTS_URL}/${id}`, {
      method: 'DELETE'
    });

    return resp.json();
  }

  async createTournament(body: any): Promise<ITournament> {
    const resp = await fetch(API_TOURNAMENTS_URL, {
      method: 'POST',
      body
    });

    return resp.json();
  }
}
