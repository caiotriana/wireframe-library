import React from 'react';
import { HatStl } from './style'
import PropTypes from 'prop-types';


export function Hat({children, inverse}) {

  return (
    <HatStl 
      inverse={inverse}
    >
      {children}
    </HatStl>
  )
}

Hat.propTypes = {
  inverse: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

Hat.defaultProps = {
  inverse: false,
  children: 'Primary button',
};
