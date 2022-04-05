interface IParticipant {
  current: number;
  max: number;
}

export interface ITournament {
  id: string;
  name: string;
  organizer: string;
  game: string;
  participants: IParticipant;
  startDate: string;
}

export interface IServiceFactory {
  lookupTournaments: (query?: string) => Promise<ITournament[]>;
  lookupEditTournament: (id: string, body: any) => Promise<ITournament>;
  lookupDeleteTournament: (id: string) => Promise<{}>;
  lookupCreateTournament: (body: string) => Promise<ITournament>;
}
