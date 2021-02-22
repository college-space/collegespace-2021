import React, { useState } from 'react';
import SingleExperiencePage from './SingleExperiencePage';
import { Pagination, Icon } from 'react-materialize';

const Experiences = ({ experiences, type }) => {
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

  return (
    <div>
      <SingleExperiencePage experiences={currentExperiences} type={type} />

      <Pagination
        activePage={1}
        items={Math.ceil(experiences.length / experiencesPerPage)}
        leftBtn={<Icon>chevron_left</Icon>}
        maxButtons={5}
        rightBtn={<Icon>chevron_right</Icon>}
        onSelect={paginate}
      />
    </div>
  );
};

export default Experiences;
