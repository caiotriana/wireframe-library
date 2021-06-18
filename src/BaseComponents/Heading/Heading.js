import React from 'react';
import { Heading } from './style'
import PropTypes from 'prop-types';


export function Button({children, inverse, size}) {

  return (
    <Heading 
      inverse={inverse}
      size={size}
    >
      {children}
    </Heading>
  )
}

Button.propTypes = {
  inverse: PropTypes.bool,
  size: PropTypes.string,
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  inverse: false,
  children: 'Primary button',
};
