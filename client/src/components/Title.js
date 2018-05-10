import React from 'react';
/************************************************************************/
const style = {
  gridRow: '2 / span 1',
  gridColumn: '3 / span 1',
  title: {
    fontSize: '38px',
    marginBottom: '18px',
  },
  description: {
    fontSize: '18px',
  },
};

const Title = ({data}) => (
  <div id="title" style={style}>
    <div
      style={style.title}>{data.mainDisplay.title}
    </div>
    <div style={style.description}>{data.mainDisplay.description}
    </div>
  </div>
);
    /************************************************************************/

    export default Title;
