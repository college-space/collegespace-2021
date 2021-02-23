import React from 'react';
import internshipsExperiences from '../meta/internshipsExperiences';
import Experiences from '../components/Experiences';

const Internships = () => {
  // Load the internship data from API
  // Also load the loader
  // set that internship data in App.js state
  // and pass that data to SingleExperience.js
  return (
    <Experiences experiences={internshipsExperiences} type='internships' />
  );
};

export default Internships;
