import { DefaultLink } from './DefaultLink'
import { useState } from 'react'
import styled from 'styled-components'
import { theme } from '../../styles'

// Styled components

const NavContainer = styled.nav`
  @media (width <= ${theme.tablet}) {
    display: none;
  }
`

const NavBlock = styled.ul`
  display: flex;
  gap: 2.5rem;
`

/**
 * Renders the default navigation component.
 *
 * @returns The rendered default navigation component.
 */
export function DefaultNav() {
  const [hoveredLinks, setHoveredLinks] = useState<string[]>([])

  return (
    <NavContainer>
      <NavBlock>
        <DefaultLink
          number={1}
          text="Studies"
          link="#studies"
          hoveredLinks={hoveredLinks}
          setHoveredLinks={setHoveredLinks}
        />
        <DefaultLink
          number={2}
          text="Career"
          link="#career"
          hoveredLinks={hoveredLinks}
          setHoveredLinks={setHoveredLinks}
        />
        <DefaultLink
          number={3}
          text="Projects"
          link="#projects"
          hoveredLinks={hoveredLinks}
          setHoveredLinks={setHoveredLinks}
        />
        <DefaultLink
          number={4}
          text="Contact"
          link="#contact"
          hoveredLinks={hoveredLinks}
          setHoveredLinks={setHoveredLinks}
        />
      </NavBlock>
    </NavContainer>
  )
}
