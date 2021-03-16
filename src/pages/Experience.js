import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGlobalContext } from '../context/context';
import ExperienceCardList from '../components/LearnSpace/ExperienceCardList';

const Experience = () => {
  const [currExperience, setCurrExperience] = useState(null);
  const { type, id } = useParams();
  const { learnSpaceData } = useGlobalContext();
  const experiences = learnSpaceData[type];

  useEffect(() => {
    for (let i = 0; i < experiences.length; i++) {
      if (experiences[i].id === id) {
        setCurrExperience(experiences[i]);
        break;
      }
    }
    // eslint-disable-next-line
  }, [id]);

  return (
    currExperience && (
      <>
        <Link
          to={`/learnspace/${type}`}
          className='btn'
          style={{ marginTop: '1rem' }}
        >
          Back to List
        </Link>
        <ExperienceCardList experience={currExperience}></ExperienceCardList>
      </>
    )
  );
};

export default Experience;
