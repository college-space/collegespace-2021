import React from 'react';
import { getImageURL } from '../../utils/getImageURL';

import {
  Card,
  Chip,
  CardTitle,
  Collapsible,
  CollapsibleItem,
  Icon,
} from 'react-materialize';

const ExperienceCardList = ({ experience }) => {
  return (
    <>
      <Card
        style={{ margin: 'auto', marginTop: 20, maxWidth: 250 }}
        header={
          <span>
            <center>
              <Chip style={{ margin: '15px', fontSize: '20px' }}>
                {experience.name}
              </Chip>
              <CardTitle
                image={getImageURL(experience.imageLink, 400, -1, -1, -1)}
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
            {experience.profile}
            <br /> {experience.company}
          </span>
        </div>
      </Card>

      <Collapsible>
        <CollapsibleItem
          header=' Question Shortlisting ?'
          icon={<Icon>arrow_drop_down_circle</Icon>}
        >
          {experience.q_shortlisting}
        </CollapsibleItem>
        <CollapsibleItem
          header=' Question Interview ?'
          icon={<Icon>arrow_drop_down_circle</Icon>}
        >
          {experience.q_interview}
        </CollapsibleItem>
        <CollapsibleItem
          header=' Question Resources ?'
          icon={<Icon>arrow_drop_down_circle</Icon>}
        >
          {experience.q_resources}
        </CollapsibleItem>
        <CollapsibleItem
          header=' Question Additional ?'
          icon={<Icon>arrow_drop_down_circle</Icon>}
        >
          {experience.q_additional}
        </CollapsibleItem>
      </Collapsible>
    </>
  );
};

export default ExperienceCardList;
