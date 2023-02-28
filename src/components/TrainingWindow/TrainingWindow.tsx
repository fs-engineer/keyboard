import React, { FC } from 'react';
import { Window } from './TrainingWindow.styled';

type TrainingWindowProps = {
  exampleData: {
    text: string;
    numOfTimes: number;
  };
};

const TrainingWindow: FC<TrainingWindowProps> = ({ exampleData }) => {
  console.log(exampleData);
  return <Window></Window>;
};

export default TrainingWindow;
