import React from 'react';
import { Container } from './Laptop.styled';
import TrainingWindow from '../TrainingWindow/TrainingWindow';
import { Keyboard } from '../Keyboard';

const example = {
  text: 'asdf',
  numOfTimes: 10,
  1: 'test',
  cast: 2,
};

const Laptop = () => {
  return (
    <Container>
      <TrainingWindow exampleData={example} />
      <Keyboard />
    </Container>
  );
};

export default Laptop;
