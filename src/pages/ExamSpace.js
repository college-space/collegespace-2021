import React from 'react';
import exampapersData from '../meta/exampapersData';
import ExamSpaceList from '../components/ExamSpaceList';

const ExamSpace = () => {
  return <ExamSpaceList exampapersData={exampapersData} />;
};

export default ExamSpace;
