import { RootState } from '../reducers';
import { IState } from '../reducers/tournaments';

export const selectTournaments = (state: RootState): IState =>
  state.tournaments;
