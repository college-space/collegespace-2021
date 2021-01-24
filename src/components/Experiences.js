import React from 'react';
import {
  Row,
  Collapsible,
  CollapsibleItem,
  Col,
  Card,
  CardTitle,
  Icon,
} from 'react-materialize';
import { Link } from 'react-router-dom';
const Experiences = ({ experiences, type }) => {
  // This component renders all the experiences
  //   console.log(experiences);
  return (
    <div>
      <Collapsible popout>
        {Object.keys(experiences).map((company) => (
          <CollapsibleItem
            header={company}
            icon={<Icon>all_inclusive</Icon>}
            className='center-align'
            style={{ fontSize: '20px' }}
          >
            {experiences[company].map((member, index) => (
              <Col m={7} s={12}>
                <div />

                <Link to={`/learnspace/${type}/${member.id}`}>
                  <Card
                    style={{ paddingLeft: '20px', fontSize: '17px' }}
                    className='hoverable'
                    horizontal
                    header={
                      <CardTitle
                        image={member.imageLink}
                        className='valign-wrapper'
                      />
                    }
                  >
                    <p>{member.name}</p>
                    <br />
                    <p>{member.profile}</p>
                    <br />
                    <p>
                      <em> "{member.caption}" </em>
                    </p>
                  </Card>
                </Link>
              </Col>
            ))}
          </CollapsibleItem>
        ))}
      </Collapsible>
    </div>
    // <Row>
    //   {experiences.map((member, index) => (
    //     <ExperienceItem
    //       member={member}
    //       id={member.id}
    //       type={type}
    //       key={index}
    //     />
    //   ))}
    // </Row>
  );
};

export default Experiences;
