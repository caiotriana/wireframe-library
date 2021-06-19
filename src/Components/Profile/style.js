import styled, { css } from 'styled-components'

import { theme } from '../../theme'
import { margin } from '../../utils/reset'

const ProfileStl = styled.div`
  display: inline-flex;
  align-items: center;
`

const defaultStyle = (props) =>
  css `
  ${margin}
  font-family: ${theme.fontFamily.base};
  
  ${props.inverse ? css `
    color : ${theme.color.secondary};
  ` : css `
    color : ${theme.color.primary};
  `}
`

const ProfileStlWrapper = styled.div`
  margin-left: 8px;
`

const ProfileStlName = styled.p`
  ${props => defaultStyle(props)}
  font-size: 14px;
  font-weight: ${theme.fontWeight.medium};
`

const ProfileStlRole = styled.p`
  ${props => defaultStyle(props)}
  font-size: 12px;
  font-weight: ${theme.fontWeight.light};
`

export { 
  ProfileStl,
  ProfileStlWrapper,
  ProfileStlName,
  ProfileStlRole
}