import styled, { css } from 'styled-components'
import { rgba } from 'polished'

import { theme } from '../../theme'

import { margin } from '../../utils/reset'


const CardSquareStl = styled.div`  
  width: 100%;
  max-width: 370px;

  a {
    margin-top: 24px;
  }
`
const CardSquareStlFigure = styled.figure`
  ${margin}
  width: 100%;
  height: 370px;
  background : ${ props => props.inverse ? theme.color.secondary : theme.color.primary};
  margin-bottom: 24px;
`

export { 
  CardSquareStl,
  CardSquareStlFigure
}