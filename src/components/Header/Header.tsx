import { AppSection } from '../../styles'
import { Logo } from '../Logo'
import { DefaultNav } from './DefaultNav'
import { Burger } from '../../icons/Burger'
import { ResponsiveMenu } from './ResponsiveMenu'
import { useState } from 'react'
import styled from 'styled-components'
import { theme } from '../../styles'

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

const StyledBurger = styled(Burger)`
  width: 2rem;
  fill: ${theme.green};
  cursor: pointer;
  display: none;
  transition: fill 0.2s;

  &:hover {
    fill: ${theme.darkenedGreen};
    transition: fill 0.2s;
  }

  &:active {
    fill: ${theme.darkenedGreen};
    transition: fill 0.2s;
  }

  @media (width <= ${theme.tablet}) {
    display: block;
  }
`

/**
 * Renders the header component.
 *
 * @returns The rendered header component.
 */
export function Header() {
  const [activeResponsiveMenu, setActiveResponsiveMenu] = useState(false)

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <Logo />
          <DefaultNav />
          <StyledBurger onclick={() => setActiveResponsiveMenu(true)} />
        </HeaderContent>
      </HeaderContainer>
      {activeResponsiveMenu && (
        <ResponsiveMenu setActiveResponsiveMenu={setActiveResponsiveMenu} />
      )}
    </>
  )
}
