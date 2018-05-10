import React from 'react';

/************************************************************************/
const style = {
  gridRow: '4 / span 1',
  gridColumn: '2 / span 2',
  justifySelf: 'stretch',
  alignSelf: 'stretch',
  overflow: 'hidden',
};

const MainImage = ({data}) => (
  <div className="MainImage" style={style}>
    <img src={data.mainDisplay.img} alt="Sorry, image seems to be broken" ></img>
  </div>
);
/************************************************************************/

export default MainImage;
