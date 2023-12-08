import { ResponsiveLink } from './ResponsiveLink'
import styled from 'styled-components'
import { links } from '../../content/header'

// Styled components

const NavBlock = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

/**
 * Renders the responsive navigation.
 *
 * @returns The responsive navigation.
 */
export function ResponsiveNav() {
  return (
    <NavBlock>
      {links.map((link, index) => (
        <ResponsiveLink
          key={index}
          number={index + 1}
          text={link.text}
          link={link.link}
        />
      ))}
    </NavBlock>
  )
}
