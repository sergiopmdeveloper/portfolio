import { AppSection } from '../../styles'
import { Logo } from '../Logo'
import { DefaultNav } from './DefaultNav'
import { Burger } from '../../icons/Burger'
import { ResponsiveMenu } from './ResponsiveMenu'
import { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { gsap } from 'gsap'
import styled from 'styled-components'
import { theme } from '../../styles'

// Styled components

const HeaderContainer = styled.header<{
  $scrollingDown: boolean
  $actualScrollPosition: number
  $activeResponsiveMenu: boolean
}>`
  width: 100%;
  height: 6rem;
  position: sticky;
  top: 0;
  z-index: 99;
  transition:
    transform 0.2s,
    background-color 0.2s;

  ${props =>
    props.$actualScrollPosition > 0 &&
    'background-color: ' + theme.lightNavy + ';'};

  ${props =>
    props.$scrollingDown &&
    props.$actualScrollPosition > 0 &&
    'transform: translateY(-100%);'};

  ${props =>
    props.$activeResponsiveMenu &&
    '@media (width <= ' + theme.tablet + ') {transform: translateY(-100%);}'};

  @media (width <= ${theme.largeMobile}) {
    height: 5rem;
  }
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
  const [scrollingDown, setScrollingDown] = useState(false)
  const { actualScrollPosition, previousScrollPosition } = useScrollPosition()
  const logoRef = useRef<HTMLDivElement>(null)
  const burgerRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (actualScrollPosition > previousScrollPosition) {
      setScrollingDown(true)
    } else if (actualScrollPosition < previousScrollPosition) {
      setScrollingDown(false)
    }
  }, [actualScrollPosition, previousScrollPosition])

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
      <HeaderContainer
        $scrollingDown={scrollingDown}
        $actualScrollPosition={actualScrollPosition}
        $activeResponsiveMenu={activeResponsiveMenu}
      >
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
