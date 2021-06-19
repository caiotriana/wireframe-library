import React from 'react';
import { SubtitleStl } from './style'
import PropTypes from 'prop-types';


export function Subtitle({children, inverse, size}) {

  return (
    <SubtitleStl 
      inverse={inverse}
      size={size}
    >
      {children}
    </SubtitleStl>
  )
}

Subtitle.propTypes = {
  inverse: PropTypes.bool,
  children: PropTypes.string.isRequired,
  size: PropTypes.string,
};

Subtitle.defaultProps = {
  inverse: false,
  children: 'Primary button',
  size: 'md',
};
