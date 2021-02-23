import React, { useEffect, useState } from 'react';
import Experiences from '../components/Experiences';
import Loader from '../components/Loader';

const Placements = ({ placementsExperiences, setPlacementsExperiences }) => {
  const [loading, setLoading] = useState(false);

  const getPlacementsData = async () => {
    // If data is already present, then don't call the API
    if (placementsExperiences.length > 0) return;

    setLoading(true);
    const response = await fetch(
      `https://collegespace-backend-strapi.herokuapp.com/placements`
    );

    const placementsExperiencesData = await response.json();
    // console.log(placementsExperiencesData);
    setPlacementsExperiences(placementsExperiencesData);
    setLoading(false);
  };

  useEffect(() => {
    // console.log(placementsExperiences);
    getPlacementsData();
  }, []);

  if (loading) return <Loader />;
  return <Experiences experiences={placementsExperiences} type='placements' />;
};

export default Placements;
