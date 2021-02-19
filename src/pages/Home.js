import React from 'react';
import { Row, Col } from 'react-materialize';
import { getImageURL } from '../utils/getImageURL';

const Home = () => {
  return (
    <div>
      <Row>
        <p>
          CollegeSpace, the Socio-Academic Portal of NSUT, is the most
          frequently visited website of NSUT. We aim to make the life of every
          NSUTian simpler & turn these four years into a smoother ride!
        </p>
      </Row>
      <Row>
        <Col m={3} s={12}>
          <div className='card large'>
            <div className='card-image'>
              <img
                src={getImageURL(
                  'https://res.cloudinary.com/neo1729/image/upload/v1613712053/CollegeSpace%20Feb%202021/logo1_jon7yh.png',
                  300,
                  -1,
                  -1,
                  -1
                )}
              />
            </div>
            <span className='card-title'>Who are we?</span>
            <div className='card-content'>
              <p>
                A bunch of curious, enthusisatic and motivated college students,
                who work together to build solutions to problems that we face
                every day.
                <br />
                <b>We build & manage products!</b>
              </p>
            </div>
          </div>
        </Col>
        <Col m={3} s={12}>
          <div className='card large'>
            <div className='card-image'>
              <img
                src={getImageURL(
                  'https://res.cloudinary.com/neo1729/image/upload/v1613712053/CollegeSpace%20Feb%202021/logo2_ii79c5.png',
                  300,
                  -1,
                  -1,
                  -1
                )}
              />
            </div>
            <span className='card-title'>What have we been upto?</span>
            <div className='card-content'>
              <p>
                CollegeSpace has been the one-stop solution for students the
                night before exam. We're now building <b>ExamSpace</b>,{' '}
                <b>LearnSpace</b> and the <b>ClassSpace App</b>
                <br />
              </p>
            </div>
          </div>
        </Col>
        <Col m={3} s={12}>
          <div className='card large'>
            <div className='card-image'>
              <img
                src={getImageURL(
                  'https://res.cloudinary.com/neo1729/image/upload/v1613712053/CollegeSpace%20Feb%202021/logo3_mkdfjf.png',
                  300,
                  -1,
                  -1,
                  -1
                )}
              />
            </div>
            <span className='card-title'>Whom will you meet at CS?</span>
            <div className='card-content'>
              <p>
                Students who are leveraging experiential learning for leading
                bright careers! Tech, Product Management, Data Science
                <br />
                <b>Everyone contributing in their own way!</b>
              </p>
            </div>
          </div>
        </Col>
        <Col m={3} s={12}>
          <div className='card large'>
            <div className='card-image'>
              <img
                src={getImageURL(
                  'https://res.cloudinary.com/neo1729/image/upload/v1613712053/CollegeSpace%20Feb%202021/logo4_desbp8.png',
                  300,
                  -1,
                  -1,
                  -1
                )}
              />
            </div>
            <span className='card-title'>Why should you join CS?</span>
            <div className='card-content'>
              <p>
                Learn what you love, apply your skills to solve actual problems!
                Learn about <b>GSOC, international internships, placements </b>
                from the CS family's experience
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <ul>
          <li>
            <b>ExamSpace</b> - A place to find the previous year papers that
            serves the new NSUT curriculum too
            <br />
          </li>
          <li>
            <b>LearnSpace</b> - A place to view the internship and placement
            experiences
            <br />
          </li>
          <li>
            <b>ClassSpace App</b> - A cross-platform app that'll set
            notifications and alarms for you so that you don't have to miss out
            on that precious attendance
          </li>
        </ul>
      </Row>
      {/* <p>
        CollegeSpace, the Socio-Academic Portal of NSUT, is the most frequently
        visited website of NSUT. It was started out by a team of three
        enthusiastic students with an aim to provide a holistic solution to all
        student needs; those that are encountered during these four crucial
        years of college. Now, after five successful years, we have a large team
        of hardworking & committed students working in various departments such
        as web development, content writing & content collection. In short - We
        aim to make the life of every NSUTian simpler & turn these four years
        into a smoother ride!
      </p> */}
    </div>
  );
};

export default Home;
