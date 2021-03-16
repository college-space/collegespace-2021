import React from 'react';
import LearnSpaceCard from './LearnSpaceCard';
import { Row } from 'react-materialize';

const LearnSpaceListSinglePage = ({ experiences }) => {
  return (
    <Row>
      {experiences.map((member) => (
        <LearnSpaceCard member={member} id={member.id} key={member.id} />
      ))}
    </Row>
  );
};

export default LearnSpaceListSinglePage;
