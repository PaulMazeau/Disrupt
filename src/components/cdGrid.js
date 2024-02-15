import React from 'react';
import '../styles/cdGrid.css'; 
import CdBox from './cdBox';

function CdGrid() {
  return (
    <div className="CdGrid">
      <CdBox />
      <CdBox />
      <CdBox />
      <CdBox />
      <CdBox />
      <CdBox />
    </div>
  );
}

export default CdGrid;
