import React, { useEffect, useState } from 'react';
import ExamSpaceList from '../components/ExamSpaceList';
import { useLocation, useParams } from 'react-router-dom';

const ExamSpace = () => {
  const location = useLocation();
  const { branch } = useParams();
  const [exampapersData, setExamPapersData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getExamPapersData = async (branch) => {
    setLoading(true);

    const response = await fetch(
      `https://collegespace-backend-strapi.herokuapp.com/exampapers?branch=${branch}`
    );

    const examPapers = await response.json();
    if (examPapers.length > 0) {
      setExamPapersData(examPapers[0]);
    } else setExamPapersData(null);

    setLoading(false);
  };

  useEffect(() => {
    getExamPapersData(branch);
  }, [location.pathname]);

  if (loading) return <div>Loading</div>;
  else if (exampapersData == null)
    return <div>Papers of this branch will be added soon!!</div>;
  return <ExamSpaceList exampapersData={exampapersData} />;
};

export default ExamSpace;
