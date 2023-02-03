import React, { useState } from 'react';
import { BoxCol, BoxRow, Container, LiPoints, UlPoints } from './TheoryStyle';

const Theory = () => {
  const [boxPointList, setBoxPointList] = useState([
    {
      id: 0,
      title: 'Do First',
      genericMessage: 'Urgent and important tasks to work on immediatly',
      points: [
        'Due, Overdue, Due soon',
        'Adds value to my life',
        'Long term goals',
        'Learning New Skills',
      ],
    },
    {
      id: 1,
      title: 'Decide',
      genericMessage: 'Schedule a time to do it.',
      points: [
        'Flagged, no due date',
        'Adds value to my life',
        'Not time sensitive',
        'Crisis, Deadline, Emergencies',
        'Schedule to track progress',
      ],
    },
    {
      id: 2,
      title: 'Delegate',
      genericMessage: 'Who can do it for me?',
      points: [
        'Urgent, but not important tasks that need to be completed quickly.',
        'Delegate to free up time to do important things.',
      ],
    },
    {
      id: 3,
      title: 'Declutter',
      genericMessage: 'It is ok to say NO!',
      points: [
        'Not urgent or important',
        'Can delete entirely.',
        'Nice to do if I have time.',
        'Ex. Social Event',
      ],
    },
  ]);

  const ShowPoints = (boxIndex: number) => {
    const listItems = boxPointList[boxIndex].points.map((point, index) => (
      <LiPoints> {point}</LiPoints>
    ));

    return listItems;
  };

  const BoxColGenerator = (boxIndex: number) => {
    return (
      <BoxCol>
        <h3>{boxPointList[boxIndex].title}</h3>
        <p>{boxPointList[boxIndex].genericMessage}</p>
        <UlPoints>{ShowPoints(boxIndex)}</UlPoints>
      </BoxCol>
    );
  };

  return (
    <div>
      <BoxRow>
        <Container>{BoxColGenerator(0)}</Container>
        <Container>{BoxColGenerator(1)}</Container>
      </BoxRow>
      <BoxRow>
        <Container>{BoxColGenerator(2)}</Container>
        <Container>{BoxColGenerator(3)}</Container>
      </BoxRow>
    </div>
  );
};

export default Theory;
