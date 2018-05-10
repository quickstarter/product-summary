import React from 'react';
/************************************************************************/
const style = {
  display: 'inline',
  gridRow: '5 / span 1',
  gridColumn: '2 / span 2',
  alignSelf: 'center',
  padding: '18px 0 18px 0',
  justifySelf: 'start',
  fontSize: '12px',
  icons: {

    alignSelf: 'end',
  },
  text: {

    margin: '0 18px 0px 6px',
    textDecoration: 'none',
    color: 'rgb(40, 40, 40)',
    alignSelf: 'center',
  },
};

const Footer = ({data}) => (
  <div
  className="Footer" style={style}>

    <img
    style={style.icons}
    src="https://s17.postimg.cc/rj782wx7z/Untitled_2.png" alt="Sorry, image seems to be broken">
    </img>
    <a id="fav" href="" style={style.text}>Our Favorite Products</a>
    <img
    id="cIcon"
    style={style.icons}
    src="https://s17.postimg.cc/bekt9otv3/compass_icon.png" alt="Sorry, image seems to be broken">
    </img>
    <a href="" style={style.text}>{data.product.category}</a>

    <img
    id ="mIcon"
    style={style.icons}
    src="https://s17.postimg.cc/gpzpuevdb/map-pin.png" alt="Sorry, image seems to be broken">
    </img>
    <a href="" style={style.text}>Location: {data.creator.location}</a>
  </div>
);
/************************************************************************/

export default Footer;
