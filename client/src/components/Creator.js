import React from 'react';
/************************************************************************/
const style = {
  gridRow: '2 / span 1',
  gridColumn: '2 / span 1',
  avatarImg: {
    display: 'block',
    borderRadius: '50%',
    height: '42px',
    marginBottom: '18px',
  },
  name: {
    textDecoration: 'none',
    color: 'rgb(40, 40, 40)',
  },
  productCount: {
    color: 'rgb(149, 149, 158)',
  },

};

const Creator = ({data}) => (
  <div id="creator" style={style}>
    <img
      src={data.creator.avatarImg}
      style={style.avatarImg}>
    </img>
    <span >
      <a style={style.name} href="">By {" "} {data.creator.name}</a>
    </span>
    <div id="numProducts" style={style.productCount}>
      First created
    </div>
  </div>
  );
/************************************************************************/

export default Creator;
