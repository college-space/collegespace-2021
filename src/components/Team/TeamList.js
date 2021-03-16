import React from 'react';
import { Tabs, Tab, Row, Col, Chip, Card, CardTitle } from 'react-materialize';
import { getImageURL } from '../../utils/getImageURL';
import { useGlobalContext } from '../../context/context';

const TeamList = () => {
  const { teamData } = useGlobalContext();

  return (
    <Tabs>
      {Object.keys(teamData).map((dept, index) => (
        <Tab title={dept} key={index} active={dept === 'Leadership'}>
          <Row>
            {teamData[dept].map((member, index) => (
              <Col m={4} s={12} key={index} style={{ verticalAlign: 'bottom' }}>
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
                          <img
                            src={getImageURL(member.chipImage, 100, -1, -1, -1)}
                            alt={member.name}
                          />
                          {member.name}
                        </Chip>
                        <CardTitle
                          image={getImageURL(member.chipImage, 300, -1, -1, -1)}
                        />
                      </center>
                    </span>
                  }
                  // actions={[<a href='#'>Social Platforms links...</a>]}
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
  );
};

export default TeamList;
