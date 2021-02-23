import React, { useEffect, useState } from 'react';
import Experiences from '../components/Experiences';
import Loader from '../components/Loader';

const Internships = ({ internshipsExperiences, setInternshipsExperiences }) => {
  const [loading, setLoading] = useState(false);

  const getInternshipsData = async () => {
    // If data is already present, then don't call the API
    if (internshipsExperiences.length > 0) return;

    setLoading(true);
    const response = await fetch(
      `https://collegespace-backend-strapi.herokuapp.com/internships`
    );

    const internshipsExperiencesData = await response.json();
    // console.log(internshipsExperiencesData);
    setInternshipsExperiences(internshipsExperiencesData);
    setLoading(false);
  };

  useEffect(() => {
    // console.log(internshipsExperiences);
    getInternshipsData();
  }, []);

  if (loading) return <Loader />;
  return (
    <Experiences experiences={internshipsExperiences} type='internships' />
  );
};

export default Internships;
