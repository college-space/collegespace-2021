import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card, CardTitle } from 'react-materialize';

const ExperienceItem = ({ member, id, type }) => {
  return (
    <Col m={4} s={12} style={{ verticalAlign: 'bottom' }}>
      <Link to={`/learnspace/${type}/${id}`}>
        <Card
          style={{
            margin: 'auto',
            marginTop: '20px',
            height: '181px',
            fontSize: '13px',
            paddingLeft: '10px',
          }}
          className='hoverable'
          horizontal
          header={
            <CardTitle image={member.imageLink} className='valign-wrapper' />
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
