import React from 'react';
import { Icon, Row, Col } from 'react-materialize';
const Footer = () => {
  return (
    <footer className='section index-banner'>
      <div className='container'>
        <Row>
          <Col m={4} s={12}>
            <a
              href='mailto:nsut.collegespace@gmail.com'
              className='grey-text text-lighten-1'
            >
              <Icon>email</Icon>
              <span>nsut.collegespace@gmail.com </span>
            </a>
          </Col>
          <Col m={4} s={12}>
            <h6
              style={{ fontFamily: 'Merriweather, serif' }}
              className='header center-on-small-only grey-text text-lighten-1'
            >
              CollegeSpace
            </h6>
          </Col>

          <Col m={4} s={12}>
            <a
              href='https://www.google.com/maps/place/Netaji+Subhas+Institute+Of+Technology/@28.6080563,77.0339984,17z/data=!3m1!4b1!4m5!3m4!1s0x390d053516783c9b:0x7e540ab22a28446!8m2!3d28.6080516!4d77.0361871'
              target='_blank'
              rel='noreferrer'
              className='grey-text text-lighten-1'
            >
              <Icon>location_on</Icon>
              <span>NSUT, Delhi</span>
            </a>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
