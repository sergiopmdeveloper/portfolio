import { AppSection } from '../../styles'
import { Logo } from '../Logo'
import styled from 'styled-components'

// Styled components

const HeaderContainer = styled.header`
  width: 100%;
  height: 6rem;
`

const HeaderContent = styled(AppSection)`
  height: 100%;
  display: flex;
  align-items: center;
`

/**
 * Renders the header component.
 * @returns The rendered header component.
 */
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo />
      </HeaderContent>
    </HeaderContainer>
  )
}
