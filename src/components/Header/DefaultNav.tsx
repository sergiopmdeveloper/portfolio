import styled from 'styled-components'
import { DefaultLink } from './DefaultLink'

// Styled components

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
  return (
    <nav>
      <NavBlock>
        <DefaultLink number={1} text="Studies" link="#studies" />
        <DefaultLink number={2} text="Career" link="#career" />
        <DefaultLink number={3} text="Projects" link="#projects" />
        <DefaultLink number={4} text="Contact" link="#contact" />
      </NavBlock>
    </nav>
  )
}
