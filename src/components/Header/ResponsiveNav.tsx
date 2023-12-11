import { ResponsiveLink } from './ResponsiveLink'
import styled from 'styled-components'
import { links } from '../../content/header'

// Types

type ResponsiveNavProps = {
  hideMenu: () => void
}

// Styled components

const NavBlock = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

/**
 * Renders the responsive navigation.
 *
 * @param {ResponsiveNavProps} props - The properties passed to the component.
 * @param {() => void} props.hideMenu - The function to hide the menu.
 *
 * @returns The responsive navigation.
 */
export function ResponsiveNav({ hideMenu }: ResponsiveNavProps) {
  return (
    <NavBlock>
      {links.map((link, index) => (
        <ResponsiveLink
          key={index}
          number={index + 1}
          text={link.text}
          link={link.link}
          hideMenu={hideMenu}
        />
      ))}
    </NavBlock>
  )
}
