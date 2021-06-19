import styled, { css } from 'styled-components'

import { theme } from '../../theme'

import { margin } from '../../utils/reset'

import { transition } from '../../utils/transitions'




const LinkStl = styled.a`
  //reset
  ${margin}

  font-family: ${theme.fontFamily.base};
  font-size: 14px;

  display: inline-flex;
  align-items: center;

  text-decoration: none;
  cursor: pointer;

  ${props => props.inverse ? css `
    color : ${theme.color.secondary};
  ` : css `
    color : ${theme.color.primary};
  `}

  img {
    margin-left: 8px;
    height: 10px;
    ${transition}
  }

  &:hover { 
    img { 
      transform: translateX(4px);
    }
  }
  
`

export { 
  LinkStl
}