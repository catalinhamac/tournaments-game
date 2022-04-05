import React from 'react';
import { useDispatch } from 'react-redux';
import { Action } from '../actions/tournaments';
import { servicesFactory } from '../services/servicesFactory';

import { ITournament } from '../services/types';
import Input from './Input';

export const Search = () => {
  const dispatch = useDispatch();

  const handleSearch = (event: any) => {
    servicesFactory()
      .lookupTournaments(event.target.value)
      .then((result: ITournament[]) => {
        dispatch({
          type: Action.tournamentsSetSuccessTournaments,
          payload: result
        });
      })
      .catch(e => {
        dispatch({
          type: Action.tournamentsSetErrorTournaments,
          payload: e.message
        });
      });
  };

  return <Input placeholder="Search tournament ..." onChange={handleSearch} />;
};
