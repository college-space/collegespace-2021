import React from 'react';
import { Button, SideNav, SideNavItem, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <SideNav
      id='SideNav-10'
      fixed={true}
      options={{
        draggable: true,
      }}
      // trigger={<Button node='button'>SIDE NAV DEMO</Button>}
      trigger={<Icon>menu</Icon>}
    >
      <SideNavItem
        user={{
          background: 'logo.png',
          email: 'jdandturk@gmail.com',
          name: 'John Doe',
        }}
        userView
      />

      <Link to={'/'}>
        <SideNavItem waves icon={<Icon>color_lens</Icon>}>
          Home
        </SideNavItem>
      </Link>

      <Link to={'/examspace'}>
        <SideNavItem waves icon={<Icon>videogame_asset</Icon>}>
          ExamSpace
        </SideNavItem>
      </Link>

      <SideNavItem divider />
      <SideNavItem subheader>Subheader</SideNavItem>

      <Link to={'/learnspace'}>
        <SideNavItem waves icon={<Icon>toys</Icon>}>
          LearnSpace
        </SideNavItem>
      </Link>
    </SideNav>
  );
};

export default SideBar;
