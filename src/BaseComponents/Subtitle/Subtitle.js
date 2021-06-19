import React from 'react';
import { SubtitleStl } from './style'
import PropTypes from 'prop-types';


export function Subtitle({children, inverse}) {

  return (
    <SubtitleStl 
      inverse={inverse}
    >
      {children}
    </SubtitleStl>
  )
}

Subtitle.propTypes = {
  inverse: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

Subtitle.defaultProps = {
  inverse: false,
  children: 'Primary button',
};
