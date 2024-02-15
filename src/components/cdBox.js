import React from 'react';
import '../styles/cd.css';
import jour25 from '../assets/images/jour25.png';

function CdBox() {
  return (
    <div className="CdBox">
      <img src={jour25} alt="Solitude" className="Image" />
      <div className="TextInfo">
        <p>Nom : Solitude</p>
        <p>Bpm : 145</p>
        <p>Producteur : Couture</p>
      </div>
    </div>
  );
}

export default CdBox;
