import styled, { css } from 'styled-components'

import { theme } from '../../theme'

import { margin } from '../../utils/reset'


const sizes = {
  sm : '20px',
  md : '24px',
}

const SubtitleStl = styled.p`
  //reset
  ${margin}

  font-family: ${theme.fontFamily.base};
  font-size: ${props => sizes[props.size] || sizes.md};

  ${props => props.inverse ? css `
    color : ${theme.color.secondary};
  ` : css `
    color : ${theme.color.primary};
  `}
  
`
export { 
  SubtitleStl
}