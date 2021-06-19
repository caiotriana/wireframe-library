import styled, { css } from 'styled-components'

import { theme } from '../../theme'


const $sizes = {
  sm : '24px',
  md : '32px',
  lg : '48px'
}

const AvatarStl = styled.div`
  height: ${ props => $sizes[props.size] || $sizes['md'] } ;
  width: ${ props => $sizes[props.size] || $sizes['md'] } ;

  ${props => props.inverse ? css `
    background : ${theme.color.secondary};
  ` : css `
    background : ${theme.color.primary};
  `}

  border-radius: ${theme.borderRadius.pill};
  
`
export { 
  AvatarStl
}