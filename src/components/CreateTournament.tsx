import React from 'react';
import { useDispatch } from 'react-redux';

import { createTournamentsThunk } from '../thunks/tournaments';
import Button from './Button';

export const CreateTournament = () => {
  const dispatch = useDispatch();

  const handleCreate = () => {
    let tournament = prompt('Tournament Name:');
    if (tournament != null) {
      dispatch(createTournamentsThunk(JSON.stringify({ name: tournament })));
    }
  };
  return (
    <div>
      <Button onClick={handleCreate}>CREATE TOURNAMENT</Button>
    </div>
  );
};
