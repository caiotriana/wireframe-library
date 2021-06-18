import styled, { css } from 'styled-components'

import { theme } from '../../theme'

import { transition } from '../../utils/transitions'

const ButtonStl = styled.button`
  border-radius: ${ theme.borderRadius.sm };
  padding: 16px 24px;
  display: inline-flex;
  font-family: ${ theme.fontFamily.base };
  
  //colors
  color : ${ props => props.secondary ? theme.color.primary : theme.color.secondary };
  background-color: ${ props => props.secondary ? theme.color.secondary : theme.color.primary };
  border : 1px solid ${ props => props.secondary ? theme.color.primary : theme.color.secondary };
  
  cursor: pointer;

  ${ transition }

  &:hover { 
    ${ props => props.disabled ? '' : css `
      color : ${ props => props.secondary ? theme.color.secondary : theme.color.primary };
      background-color: ${ props => props.secondary ? theme.color.primary : theme.color.secondary };
      border : 1px solid ${ props => props.secondary ? theme.color.secondary : theme.color.primary };
    `}
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export { 
  ButtonStl
}