import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { ITournament } from '../services/types';
import {
  deleteTournamentsThunk,
  editTournamentsThunk
} from '../thunks/tournaments';
import Button from './Button';
import H6 from './H6';

interface IProps {
  tournament: ITournament;
}

const Wrapper = styled.div`
  flex: 0 0 auto;
  width: 30%;
  padding: 0 12px;
  margin-top: 24px;
`;

const Box = styled.div`
  border-radius: 4px;
  background-color: rgb(85, 89, 92);
  padding: 16px;
`;

const P = styled.div`
  margin: 0;
`;

export const Tournament = ({ tournament }: IProps) => {
  const {
    id,
    name,
    organizer,
    game,
    participants: { current, max },
    startDate
  } = tournament;
  const dateOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  const dispatch = useDispatch();

  const handleEdit = () => {
    let tournament = prompt('New Tournament Name', name);
    if (tournament != null) {
      dispatch(editTournamentsThunk(id, JSON.stringify({ name: tournament })));
    }
  };

  const handleDelete = () => {
    let tournament = prompt(
      'Do you really want to delete this tournament?',
      name
    );
    if (tournament != null) {
      dispatch(deleteTournamentsThunk(id));
    }
  };

  return (
    <Wrapper>
      <Box>
        <div style={{ marginBottom: '10px' }}>
          <H6>{name}</H6>
          <P>{`Organizer: ${organizer}`}</P>
          <P>{`Game: ${game}`}</P>
          <P>{`Participants: ${current}/${max}`}</P>
          <P>{`Start: ${new Intl.DateTimeFormat(
            'en-GB',
            dateOptions as Intl.DateTimeFormatOptions
          ).format(new Date(startDate))}`}</P>
        </div>
        <div>
          <Button onClick={handleEdit} style={{ marginRight: '8px' }}>
            Edit
          </Button>
          <Button onClick={handleDelete}>Delete</Button>
        </div>
      </Box>
    </Wrapper>
  );
};
