import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context/context';
import Loader from '../components/Layout/Loader';
import LearnSpaceList from '../components/LearnSpace/LearnSpaceList';

const LearnSpace = () => {
  const { type } = useParams();
  const {
    setHeading,
    isLoading,
    learnSpaceData,
    getLearnSpaceData,
  } = useGlobalContext();

  useEffect(() => {
    setHeading(`LearnSpace - ${type.toUpperCase()}`);
    getLearnSpaceData(type);
  }, [type]);

  if (isLoading) return <Loader />;
  return <LearnSpaceList />;
  //   return <div>hello</div>;
};

export default LearnSpace;
