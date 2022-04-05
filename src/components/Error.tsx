import React from 'react';
import Button from './Button';
import { Center } from './Center';

interface IProps {
  onRetry: () => void;
}

export const Error = ({ onRetry }: IProps) => (
  <Center>
    <p>Something went wrong.</p>
    <div>
      <Button onClick={onRetry}>Retry</Button>
    </div>
  </Center>
);
