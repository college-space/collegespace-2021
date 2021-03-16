import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Pagination, Icon } from 'react-materialize';
import { useGlobalContext } from '../../context/context';
import LearnSpaceListSinglePage from './LearnSpaceListSinglePage';

const LearnSpaceList = () => {
  const { type } = useParams();
  const { learnSpaceData } = useGlobalContext();
  const experiences = learnSpaceData[type];

  const [currentPage, setCurrentPage] = useState(1);
  const [experiencesPerPage, setExperiencesPerPage] = useState(6);

  // Get current experiences
  const indexOfLastExperience = currentPage * experiencesPerPage;
  const indexOfFirstExperience = indexOfLastExperience - experiencesPerPage;
  const currentExperiences = experiences.slice(
    indexOfFirstExperience,
    indexOfLastExperience
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    // reset to first page whenever 'type' changes
    setCurrentPage(1);
  }, [type]);

  return (
    <>
      <LearnSpaceListSinglePage experiences={currentExperiences} />

      <Pagination
        activePage={1}
        items={Math.ceil(experiences.length / experiencesPerPage)}
        leftBtn={<Icon>chevron_left</Icon>}
        maxButtons={5}
        rightBtn={<Icon>chevron_right</Icon>}
        onSelect={paginate}
      />
    </>
  );
};

export default LearnSpaceList;
