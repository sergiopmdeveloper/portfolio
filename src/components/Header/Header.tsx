import { AppSection } from '../../styles'
import { Logo } from '../Logo'
import { DefaultNav } from './DefaultNav'
import { Burger } from '../../icons/Burger'
import { ResponsiveMenu } from './ResponsiveMenu'
import { useState, useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
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
  const logoRef = useRef<HTMLDivElement>(null)
  const burgerRef = useRef<SVGSVGElement>(null)

  useLayoutEffect(() => {
    if (logoRef.current && burgerRef.current) {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 }
      )

      gsap.fromTo(
        burgerRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.1 }
      )
    }
  }, [])

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <Logo ref={logoRef} />
          <DefaultNav />
          <StyledBurger
            onclick={() => setActiveResponsiveMenu(true)}
            ref={burgerRef}
          />
        </HeaderContent>
      </HeaderContainer>
      {activeResponsiveMenu && (
        <ResponsiveMenu setActiveResponsiveMenu={setActiveResponsiveMenu} />
      )}
    </>
  )
}
