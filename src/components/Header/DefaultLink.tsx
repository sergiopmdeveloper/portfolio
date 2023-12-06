import styled from 'styled-components'
import { theme } from '../../styles'

// Types

type DefaultLinkProps = {
  number: number
  text: string
  link: string
}

// Styled components

const NavItemText = styled.span`
  color: ${theme.white};
  transition: color 0.2s ease;
`

const NavItem = styled.li`
  list-style: none;
  font-size: 1rem;
  font-family: ${theme.spaceMono};

  &:hover ${NavItemText} {
    color: ${theme.green};
    transition: color 0.2s ease;
  }

  &:active ${NavItemText} {
    color: ${theme.green};
    transition: color 0.2s ease;
  }
`

const NavItemNumber = styled.span`
  color: ${theme.green};
  margin-right: 0.5rem;
`

/**
 * Renders a navigation link.
 *
 * @param {DefaultLinkProps} props - The properties passed to the component.
 * @param {number} props.number - The number of the link.
 * @param {string} props.text - The text to be displayed for the link.
 * @param {string} props.link - The URL to which the link points.
 *
 * @returns A navigation link.
 */
export function DefaultLink({ number, text, link }: DefaultLinkProps) {
  return (
    <a href={link}>
      <NavItem>
        <NavItemNumber>{number}.</NavItemNumber>
        <NavItemText>{text}</NavItemText>
      </NavItem>
    </a>
  )
}
