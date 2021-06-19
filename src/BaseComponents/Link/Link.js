import React from 'react';
import { LinkStl } from './style'
import PropTypes from 'prop-types';

import chevronRight from './assets/chevron.svg'
import chevronRightInverse from './assets/chevron_inverse.svg'


export function Link({children, inverse, href}) {

  return (
    <LinkStl 
      inverse={inverse}
      href={href}
    >
      {children}
      <img src={inverse ? chevronRightInverse : chevronRight} alt="chevron right" />
    </LinkStl>
  )
}

Link.propTypes = {
  inverse: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

Link.defaultProps = {
  inverse: false,
  children: 'Primary button',
};
