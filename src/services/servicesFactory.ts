import { HttpClient } from './HttpClient';
import { IServiceFactory } from './types';

export const servicesFactory = (
  initialClient?: HttpClient
): IServiceFactory => {
  const client = initialClient || new HttpClient();

  return {
    async lookupTournaments(query) {
      return client.fetchTournaments(query);
    },

    async lookupEditTournament(id: string, body: any) {
      return client.editTournament(id, body);
    },

    async lookupDeleteTournament(id: string) {
      return client.deleteTournament(id);
    },

    async lookupCreateTournament(body: any) {
      return client.createTournament(body);
    }
  };
};
