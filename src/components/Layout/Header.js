import React from 'react';
import { useGlobalContext } from '../../context/context';

const Header = () => {
  const { heading } = useGlobalContext();
  return (
    <header className='section index-banner'>
      <div className='container'>
        <h3 className='header center-on-small-only white-text capitalize'>
          {heading}
        </h3>
      </div>
    </header>
  );
};

export default Header;
