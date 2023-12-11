import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import styled from 'styled-components'
import { theme } from '../../styles'

// Types

type ResponsiveLinkProps = {
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
  font-size: ${theme.fontSize5};
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
 * Renders a responsive navigation link.
 *
 * @param {ResponsiveLinkProps} props - The properties passed to the component.
 * @param {number} props.number - The number of the link.
 * @param {string} props.text - The text to be displayed for the link.
 * @param {string} props.link - The URL to which the link points.
 *
 * @returns A responsive navigation link.
 */
export function ResponsiveLink({ number, text, link }: ResponsiveLinkProps) {
  const linkRef = useRef<HTMLAnchorElement>(null)

  useLayoutEffect(() => {
    if (linkRef.current) {
      gsap.fromTo(
        linkRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5, delay: number * 0.1 }
      )
    }
  }, [number])

  return (
    <a href={link} ref={linkRef}>
      <NavItem>
        <NavItemNumber>{number}.</NavItemNumber>
        <NavItemText>{text}</NavItemText>
      </NavItem>
    </a>
  )
}
