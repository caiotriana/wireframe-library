import styled, { css } from 'styled-components'
import { rgba } from 'polished'

import { theme } from '../../theme'

import { margin } from '../../utils/reset'


const ParagraphStl = styled.p`
  //reset
  ${margin}

  font-family: ${theme.fontFamily.base};
  font-size: 16px;

  ${props => props.inverse ? css `
    color : ${rgba(theme.color.secondary, 0.7)};
  ` : css `
    color : ${rgba(theme.color.primary, 0.7)};
  `}
  
`

export { 
  ParagraphStl
}