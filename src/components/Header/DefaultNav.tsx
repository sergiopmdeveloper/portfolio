import { DefaultLink } from './DefaultLink'
import { useState } from 'react'
import styled from 'styled-components'
import { theme } from '../../styles'
import { links } from '../../content/header'

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
        {links.map((link, index) => (
          <DefaultLink
            key={index}
            number={index + 1}
            text={link.text}
            link={link.link}
            hoveredLinks={hoveredLinks}
            setHoveredLinks={setHoveredLinks}
          />
        ))}
      </NavBlock>
    </NavContainer>
  )
}
