import React from 'react';
import { ButtonStl } from './style'
import PropTypes from 'prop-types';


export function Button({children, primary, secondary, disabled, onClick}) {

  return (
    <ButtonStl 
      type="button"
      primary={primary}
      secondary={secondary}
      disabled={disabled}
      onClick={onClick}
      >
      {children}
    </ButtonStl>
  )
}

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  primary: true,
  secondary: false,
  children: 'Primary button',
  onClick: undefined,
  disabled: false
};
