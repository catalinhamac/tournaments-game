import { Dispatch } from 'react';
import { Action } from '../actions/tournaments';
import { servicesFactory } from '../services/servicesFactory';

export const getTournamentsThunk = (query?: string) => async (
  dispatch: Dispatch<any>
) => {
  const { lookupTournaments } = servicesFactory();

  try {
    dispatch({ type: Action.tournamentsSetIsLoadingTournaments });
    const result = await lookupTournaments(query);

    dispatch({
      type: Action.tournamentsSetSuccessTournaments,
      payload: result
    });
  } catch (e) {
    dispatch({
      type: Action.tournamentsSetErrorTournaments,
      payload: (e as any).message
    });
  }
};

export const editTournamentsThunk = (id: string, body: any) => async (
  dispatch: Dispatch<any>
) => {
  const { lookupEditTournament } = servicesFactory();

  try {
    dispatch({ type: Action.tournamentsSetIsLoadingEditTournament });
    const result = await lookupEditTournament(id, body);

    dispatch({
      type: Action.tournamentsSetSuccessEditTournament,
      payload: result
    });
  } catch (e) {
    dispatch({
      type: Action.tournamentsSetErrorEditTournament,
      payload: (e as any).message
    });
  }
};

export const deleteTournamentsThunk = (id: string) => async (
  dispatch: Dispatch<any>
) => {
  const { lookupDeleteTournament } = servicesFactory();

  try {
    dispatch({ type: Action.tournamentsSetIsLoadingDeleteTournament });
    const result = await lookupDeleteTournament(id);

    dispatch({
      type: Action.tournamentsSetSuccessDeleteTournament,
      payload: result
    });
  } catch (e) {
    dispatch({
      type: Action.tournamentSsetErrorDeleteTournament,
      payload: (e as any).message
    });
  }
};

export const createTournamentsThunk = (body: string) => async (
  dispatch: Dispatch<any>
) => {
  const { lookupCreateTournament } = servicesFactory();

  try {
    dispatch({ type: Action.tournamentsSetIsLoadingCreateTournament });
    const result = await lookupCreateTournament(body);

    dispatch({
      type: Action.tournamentsSetSuccessCreateTournament,
      payload: result
    });
  } catch (e) {
    dispatch({
      type: Action.tournamentsSetErrorCreateTournament,
      payload: (e as any).message
    });
  }
};
