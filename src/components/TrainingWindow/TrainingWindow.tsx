import React from 'react';
import { Window } from './TrainingWindow.styled';

interface ITrainingWindowProps {
  exampleData: {
    text: string;
    numOfTimes: number;
  };
}

function TrainingWindow({ exampleData }: ITrainingWindowProps) {
  console.log(exampleData);
  return <Window></Window>;
}

export default TrainingWindow;
