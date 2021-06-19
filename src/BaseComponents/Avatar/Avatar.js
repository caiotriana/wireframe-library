import React from 'react';
import { AvatarStl } from './style'
import PropTypes from 'prop-types';


export function Avatar({inverse, size}) {

  return (
    <AvatarStl 
      inverse={inverse}
      size={size}
    />
  )
}

Avatar.propTypes = {
  inverse: PropTypes.bool,
  size: PropTypes.string
};

Avatar.defaultProps = {
  inverse: false,
  size: 'md',
};
