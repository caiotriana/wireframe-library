import React from 'react';
import { Heading } from './style'
import PropTypes from 'prop-types';


export function Button({children, inverse, size, level}) {

  return (
    <Heading 
      inverse={inverse}
      size={size}
      level={level}
    >
      {children}
    </Heading>
  )
}

Button.propTypes = {
  inverse: PropTypes.bool,
  size: PropTypes.string,
  children: PropTypes.string.isRequired,
  level: PropTypes.string
};

Button.defaultProps = {
  inverse: false,
  children: 'Primary button',
  level: 'h6'
};
