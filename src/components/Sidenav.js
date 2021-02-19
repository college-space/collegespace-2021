import React, { Component, useRef, useEffect } from 'react';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { Icon, Collapsible } from 'react-materialize';
import { NavLink } from 'react-router-dom';
import { getImageURL } from '../utils/getImageURL';

const Sidenav = () => {
  const sidenavRef = useRef(null);
  useEffect(() => {
    const options = {
      inDuration: 50,
      outDuration: 20,
      draggable: true,
    };

    M.Sidenav.init(sidenavRef.current);

    let instance = M.Sidenav.getInstance(sidenavRef.current);
    // instance.open();
  }, []);

  return (
    <>
      <ul ref={sidenavRef} id='slide-out' className='sidenav sidenav-fixed'>
        <li>
          <img
            className='container'
            src={getImageURL(
              'https://res.cloudinary.com/neo1729/image/upload/v1613712054/CollegeSpace%20Feb%202021/logo_xeqw2n.png',
              300,
              -1,
              -1,
              -1
            )}
          />
        </li>

        <li>
          <NavLink to={'/'} className='waves-effect'>
            <i className='material-icons'>cloud</i>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={'/team'} className='waves-effect'>
            <i className='material-icons'>color_lens</i>
            Meet Our Team
          </NavLink>
        </li>
        <li>
          <NavLink to={'/examspace'} className='waves-effect'>
            <i className='material-icons'>all_inclusive</i>
            ExamSpace
          </NavLink>
        </li>
        {/* <li>
          <NavLink to={'/examspace'} className='waves-effect'>
            <i className='material-icons'>videogame_asset</i>
            ExamSpace
          </NavLink>
        </li> */}

        <li className='no-padding'>
          <Collapsible accordion={true} className='collapsible-accordion'>
            <li className='bold'>
              <a
                className='collapsible-header waves-effect waves-teal'
                // style={{ display: 'flex' }}
              >
                LearnSpace
                <Icon>keyboard_arrow_down</Icon>
              </a>
              <div
                className='collapsible-body'
                // style={{ display: 'block' }}
              >
                <ul>
                  <li>
                    <NavLink
                      to={'/learnspace/internships'}
                      className='waves-effect'
                    >
                      <i className='material-icons'>toys</i>
                      Internships
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={'/learnspace/placements'}
                      className='waves-effect'
                    >
                      <i className='material-icons'>toys</i>
                      Placements
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
          </Collapsible>
        </li>
      </ul>
      <a
        href='#!'
        data-target='slide-out'
        className='sidenav-trigger hide-on-large-only'
      >
        <i className='material-icons'>menu</i>
      </a>
    </>
  );
};

export default Sidenav;
