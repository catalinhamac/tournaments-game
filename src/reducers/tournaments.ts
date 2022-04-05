import { Action } from '../actions/tournaments';
import { ITournament } from '../services/types';

export type IState = {
  isLoading: boolean;
  data: undefined | ITournament[];
  error: undefined | Error;
};

const initialState: IState = {
  isLoading: false,
  data: undefined,
  error: undefined
};

export default function tournaments(state: IState = initialState, action: any) {
  switch (action.type) {
    case Action.tournamentsSetIsLoadingTournaments:
      return {
        ...state,
        isLoading: true
      };
    case Action.tournamentsSetSuccessTournaments:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: undefined
      };
    case Action.tournamentsSetErrorTournaments:
      return {
        ...state,
        isLoading: false,
        data: undefined,
        error: action.payload
      };
    default:
      return state;
  }
}
