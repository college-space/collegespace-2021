import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card, CardTitle } from 'react-materialize';
import { getImageURL } from '../utils/getImageURL';

const ExperienceItem = ({ member, id, type }) => {
  return (
    <Col l={4} m={6} s={12} style={{ verticalAlign: 'bottom' }}>
      <Link to={`/learnspace/${type}/${id}`}>
        <Card
          style={{
            margin: 'auto',
            marginTop: '20px',
            height: '181px',
            fontSize: '13px',
            paddingLeft: '10px',
            color: 'black',
          }}
          className='hoverable'
          horizontal
          header={
            <CardTitle
              image={getImageURL(member.imageLink, 150, -1, -1, -1)}
              className='valign-wrapper'
            />
          }
        >
          <p>{member.name}</p>
          <br />
          <p>{member.profile}</p>
          <br />
          <p>{member.company}</p>
        </Card>
      </Link>
    </Col>
  );
};

export default ExperienceItem;
