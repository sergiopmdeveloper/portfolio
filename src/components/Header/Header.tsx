import { AppSection } from '../../styles'
import { Logo } from '../Logo'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  width: 100%;
  height: 6rem;
`

const HeaderContent = styled(AppSection)`
  height: 100%;
  display: flex;
  align-items: center;
`

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo />
      </HeaderContent>
    </HeaderContainer>
  )
}
