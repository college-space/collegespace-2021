import React from 'react';
import internshipsExperiences from '../meta/internshipsExperiences';
import Experiences from '../components/Experiences';

const Internships = () => {
  return (
    <Experiences experiences={internshipsExperiences} type='internships' />
  );
};

export default Internships;
