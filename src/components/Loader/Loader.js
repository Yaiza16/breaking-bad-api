import React from 'react';
import Image from '../../assets/images/Walter-White-Breaking-Bad.png';

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={Image} alt="loader-bb"></img>
    </div>
  );
};

export default Loader;
