import React from 'react';
import { HeadingStl } from './style'
import PropTypes from 'prop-types';


export function Heading({children, inverse, size, level}) {

  return (
    <HeadingStl 
      inverse={inverse}
      size={size}
      level={level}
    >
      {children}
    </HeadingStl>
  )
}

Heading.propTypes = {
  inverse: PropTypes.bool,
  size: PropTypes.string,
  children: PropTypes.string.isRequired,
  level: PropTypes.string
};

Heading.defaultProps = {
  inverse: false,
  children: 'Primary button',
  level: 'h6'
};
