import React from 'react';

const Loader = () => {
  return (
    <div className='all-center' style={{ height: '500px' }}>
      {/* <div className='lds-ripple'>
        <div></div>
        <div></div>
      </div> */}
      <div className='cssload-thecube'>
        <div className='cssload-cube cssload-c1'></div>
        <div className='cssload-cube cssload-c2'></div>
        <div className='cssload-cube cssload-c4'></div>
        <div className='cssload-cube cssload-c3'></div>
      </div>
    </div>
  );
};

export default Loader;
