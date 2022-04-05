import React, { FC, useEffect, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { selectTournaments } from '../selectors/tournaments';
import { getTournamentsThunk } from '../thunks/tournaments';
import Container from './Container';
import H4 from './H4';
import { Loading } from './Loading';
import { Error } from './Error';
import { Tournaments } from './Tournaments';
import { ITournament } from '../services/types';
import { Search } from './Search';
import { CreateTournament } from './CreateTournament';

export const App: FC = () => {
  const dispatch = useDispatch();
  const { isLoading, data: tournaments, error } = useSelector(
    selectTournaments,
    shallowEqual
  );

  useEffect(() => {
    dispatch(getTournamentsThunk());
  }, [dispatch]);

  const handleRetry = useCallback(() => {
    dispatch(getTournamentsThunk());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error onRetry={handleRetry} />;
  }

  return (
    <Container>
      <H4>FACEIT Tournaments</H4>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 15px'
        }}
      >
        <Search />
        <CreateTournament />
      </div>
      <Tournaments tournaments={tournaments as ITournament[]} />
    </Container>
  );
};
