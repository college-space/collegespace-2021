import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context/context';
import Loader from '../components/Layout/Loader';
import ExamSpaceList from '../components/ExamSpace/ExamSpaceList';

const ExamSpace = () => {
  const { branch } = useParams();

  const {
    getExamPapers,
    setHeading,
    isLoading,
    examPapersData,
  } = useGlobalContext();

  useEffect(() => {
    setHeading('ExamSpace');
    getExamPapers(branch);
    // eslint-disable-next-line
  }, [branch]);

  if (isLoading) return <Loader />;
  if (examPapersData == null)
    return <p>Papers of this branch will be added soon!!</p>;
  return <ExamSpaceList />;
};

export default ExamSpace;
