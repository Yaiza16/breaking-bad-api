import React from 'react';
import Image from '../../assets/images/Walter-White-Breaking-Bad.png';

function Loader() {
  return (
    <div className="loader-container">
      <img src={Image} alt="loader-bb" />
    </div>
  );
}

export default Loader;
