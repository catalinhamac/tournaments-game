import React from 'react';
import styled from 'styled-components';

import { ITournament } from '../services/types';
import { Center } from './Center';
import { Tournament } from './Tournament';

interface IProps {
  tournaments: ITournament[];
}

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -24px;
`;

export const Tournaments = ({ tournaments = [] }: IProps) => (
  <Div>
    {tournaments.length === 0 ? (
      <div style={{ width: '100%' }}>
        <Center>No tournaments found.</Center>
      </div>
    ) : (
      tournaments.map((tournament: ITournament) => (
        <Tournament key={tournament.id} tournament={tournament} />
      ))
    )}
  </Div>
);
