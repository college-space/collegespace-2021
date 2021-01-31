import React from 'react';
import {useLocation} from "react-router-dom";

const Header = () => {
  const {pathname} = useLocation();
  let title = pathname.match("/.*?/") ? pathname.match("/.*?/")[0].slice(1,-1): (pathname.match("/(.*)?") ? pathname.match("/(.*)?")[0].slice(1) : "CollegeSpace");
  if(title == ""){
    title = "CollegeSpace";
  }
  title = title.toUpperCase();
  return (
    <header className='section index-banner' style={{ marginBottom: 10 }}>
      <div className='container'>
        <h3
          className='header center-on-small-only white-text'
        >
        {title}
        </h3>
      </div>
    </header>
  );
};

export default Header;
