import React from 'react';
import ExperienceItem from './ExperienceItem';
import { Row } from 'react-materialize';

const Experiences = ({ experiences, type }) => {
  // This component renders all the experiences
  //   console.log(experiences);
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

export default Experiences;
