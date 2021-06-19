import styled, { css } from 'styled-components'

import { theme } from '../../theme'

import { margin } from '../../utils/reset'


const CardBlogStl = styled.div`  
  width: 100%;
  max-width: 270px;
  background-color: ${theme.color.secondary};
`
const CardBlogStlFigure = styled.figure`
  ${margin}
  width: 100%;
  height: 270px;
  background : ${ props => props.inverse ? theme.color.secondary : theme.color.primary};

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: '';
    height: 64px;
    width: 64px;
    background : ${ props => props.inverse ? theme.color.primary : theme.color.secondary};
    position: absolute;
    border-radius: ${theme.borderRadius.md};
  }
`

const CardBlogStlTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 166px;
  padding: 20px;
  background : ${ props => props.inverse ? theme.color.primary : theme.color.secondary};
`

export { 
  CardBlogStl,
  CardBlogStlFigure,
  CardBlogStlTextGroup
}