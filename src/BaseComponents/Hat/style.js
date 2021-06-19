import styled, { css } from 'styled-components'
import { rgba } from 'polished'

import { theme } from '../../theme'

import { margin } from '../../utils/reset'


const HatStl = styled.p`
  //reset
  ${margin}

  font-family: ${theme.fontFamily.base};
  font-size: 14px;
  text-transform: uppercase;
  font-weight: ${theme.fontWeight.medium};

  ${props => props.inverse ? css `
    color : ${rgba(theme.color.secondary, 0.7)};
  ` : css `
    color : ${rgba(theme.color.primary, 0.7)};
  `}
  
`

export { 
  HatStl
}