import React, { useState, useEffect } from 'react';
import internshipExperiences from '../meta/internshipsExperiences';
import {
  Card,
  Chip,
  CardTitle,
  Collapsible,
  CollapsibleItem,
  Icon,
} from 'react-materialize';

const SingleExperience = ({ match }) => {
  const [currExperience, setCurrExperience] = useState(null);

  useEffect(() => {
    const { type, id } = match.params;
    console.log(type, id);
    if (type == 'internships') {
      for (let i = 0; i < internshipExperiences.length; i++) {
        if (internshipExperiences[i].id == id) {
          setCurrExperience(internshipExperiences[i]);
          break;
        }
      }
    } else {
      // similarly search for placement experiences
    }
  }, []);

  console.log(currExperience);

  return (
    currExperience && (
      <div>
        <Card
          style={{ margin: 'auto', marginTop: 20, maxWidth: 250 }}
          header={
            <span>
              <center>
                <Chip style={{ margin: '15px', fontSize: '20px' }}>
                  {currExperience.name}
                </Chip>
                <CardTitle image={currExperience.imageLink} />
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
