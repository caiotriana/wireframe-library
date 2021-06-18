import styled, { css } from 'styled-components'

import { theme } from '../../theme'

import { margin } from '../../utils/reset'


const $sizes = {
  sm : '24px',
  md : '32px',
  lg : '48px',
  xLg : '60px'
}


const Heading = styled.h1`
  //reset
  ${margin}

  font-family: ${theme.fontFamily.base};
  font-size: ${ props =>  $sizes[props.size] || $sizes['lg']};
  color : ${ props => props.inverse ? theme.color.secondary : theme.color.primary}
`

export { 
  Heading
}