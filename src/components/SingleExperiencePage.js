import React from 'react';
import ExperienceItem from './ExperienceItem';
import { Row } from 'react-materialize';

const SingleExperiencePage = ({ experiences, type }) => {
  return (
    <Row>
      {experiences.map((member, index) => (
        <ExperienceItem
          member={member}
          id={member.id}
          type={type}
          key={index}
        />
      ))}
    </Row>
  );
};

export default SingleExperiencePage;
