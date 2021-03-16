import React, { useEffect } from 'react';
import { useGlobalContext } from '../context/context';
import Loader from '../components/Layout/Loader';
import TeamList from '../components/Team/TeamList';

const Team = () => {
  const { setHeading, getTeamData, isLoading } = useGlobalContext();

  useEffect(() => {
    setHeading('Meet Our Team');
    getTeamData();
  }, []);

  if (isLoading) return <Loader />;

  return <TeamList />;
};

export default Team;
