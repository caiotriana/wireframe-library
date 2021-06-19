import styled, { css } from 'styled-components'

import { theme } from '../../theme'

import { margin } from '../../utils/reset'


const SubtitleStl = styled.p`
  //reset
  ${margin}

  font-family: ${theme.fontFamily.base};
  font-size: 20px;

  ${props => props.inverse ? css `
    color : ${theme.color.secondary};
  ` : css `
    color : ${theme.color.primary};
  `}
  
`
export { 
  SubtitleStl
}