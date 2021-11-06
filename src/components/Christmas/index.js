import React from 'react';
import ChristmasCrown from '../../static/res/imgs/crown-2.png'

const Christmas = ({ personalPicRect }) => {
  const { x, y, width, height } = personalPicRect;

  return (
    <img
      src={ChristmasCrown}
      alt="crown"
      style={{
        zIndex: 3,
        top: y - 70,
        left: x - 60,
        width: width + 120,
        height: height + 140,
        position: 'absolute',
      }}
    />
  )
}

export default Christmas;
