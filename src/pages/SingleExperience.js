import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getImageURL } from '../utils/getImageURL';

import {
  Card,
  Chip,
  CardTitle,
  Collapsible,
  CollapsibleItem,
  Icon,
} from 'react-materialize';

const SingleExperience = ({
  placementsExperiences,
  internshipsExperiences,
}) => {
  const [currExperience, setCurrExperience] = useState(null);
  const { type, id } = useParams();

  useEffect(() => {
    console.log(type, id);
    if (type == 'internships') {
      for (let i = 0; i < internshipsExperiences.length; i++) {
        if (internshipsExperiences[i].id == id) {
          setCurrExperience(internshipsExperiences[i]);
          break;
        }
      }
    } else {
      for (let i = 0; i < placementsExperiences.length; i++) {
        if (placementsExperiences[i].id == id) {
          setCurrExperience(placementsExperiences[i]);
          break;
        }
      }
    }
  }, []);

  console.log(currExperience);

  return (
    currExperience && (
      <div>
        <Link to={`/learnspace/${type}`} className='btn'>
          Back to List
        </Link>
        <Card
          style={{ margin: 'auto', marginTop: 20, maxWidth: 250 }}
          header={
            <span>
              <center>
                <Chip style={{ margin: '15px', fontSize: '20px' }}>
                  {currExperience.name}
                </Chip>
                <CardTitle
                  image={getImageURL(currExperience.imageLink, 400, -1, -1, -1)}
                />
              </center>
            </span>
          }
        >
          <div
            style={{
              height: '25px',
              margin: '15px',
              fontSize: '20px',
              textAlign: 'center',
            }}
          >
            <span>
              {currExperience.profile}
              <br /> {currExperience.company}
            </span>
          </div>
        </Card>

        <Collapsible>
          <CollapsibleItem
            header=' Question Shortlisting ?'
            icon={<Icon>arrow_drop_down_circle</Icon>}
          >
            {currExperience.q_shortlisting}
          </CollapsibleItem>
          <CollapsibleItem
            header=' Question Interview ?'
            icon={<Icon>arrow_drop_down_circle</Icon>}
          >
            {currExperience.q_interview}
          </CollapsibleItem>
          <CollapsibleItem
            header=' Question Resources ?'
            icon={<Icon>arrow_drop_down_circle</Icon>}
          >
            {currExperience.q_resources}
          </CollapsibleItem>
          <CollapsibleItem
            header=' Question Additional ?'
            icon={<Icon>arrow_drop_down_circle</Icon>}
          >
            {currExperience.q_additional}
          </CollapsibleItem>
        </Collapsible>
      </div>
    )
  );
};

export default SingleExperience;
