import { AppSection } from '../../styles'
import { Logo } from '../Logo'
import { DefaultNav } from './DefaultNav'
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
  justify-content: space-between;
`

/**
 * Renders the header component.
 *
 * @returns The rendered header component.
 */
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo />
        <DefaultNav />
      </HeaderContent>
    </HeaderContainer>
  )
}
