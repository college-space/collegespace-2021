import React from 'react';
import teamData from '../meta/teamData';
import { Tabs, Tab, Row, Col, Chip, Card, CardTitle } from 'react-materialize';

const Team = () => {
  return (
    <div>
      <Tabs>
        {Object.keys(teamData).map((dept, index) => (
          <Tab title={dept} key={index} active={dept === 'Leadership'}>
            <Row>
              {teamData[dept].map((member, index) => (
                <Col
                  m={4}
                  s={12}
                  key={index}
                  style={{ verticalAlign: 'bottom' }}
                >
                  <Card
                    style={{
                      margin: 'auto',
                      marginTop: '20px',
                      maxWidth: '250px',
                    }}
                    header={
                      <span>
                        <center>
                          <Chip style={{ marginTop: '15px' }}>
                            <img src={member.chipImage} alt={member.name} />
                            {member.name}
                          </Chip>
                          <CardTitle image={member.image} />
                        </center>
                      </span>
                    }
                    actions={[<a href='#'>Social Platforms links...</a>]}
                  >
                    <div style={{ height: '50px' }}>
                      {member.positions.map((position, index) => (
                        <p className='center-align' key={index}>
                          {position}{' '}
                        </p>
                      ))}
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default Team;
