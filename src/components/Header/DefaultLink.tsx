import { useState, useRef, useEffect, useLayoutEffect } from 'react'
import gsap from 'gsap'
import styled from 'styled-components'
import { theme } from '../../styles'

// Types

type DefaultLinkProps = {
  number: number
  text: string
  link: string
  hoveredLinks: string[]
  setHoveredLinks: (value: string[]) => void
}

// Styled components

const NavItemText = styled.span`
  color: ${theme.white};
  transition: color 0.2s ease;
`

const NavItem = styled.li<{ $inactiveLink: boolean }>`
  list-style: none;
  font-size: ${theme.fontSize2};
  font-family: ${theme.spaceMono};
  opacity: ${({ $inactiveLink }) => ($inactiveLink ? 0.5 : 1)};
  transition: opacity 0.2s;

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
 * @param {string[]} props.hoveredLinks - The links that are currently hovered.
 * @param {(value: string[]) => void} props.setHoveredLinks - The function to set the hovered links.
 *
 * @returns A navigation link.
 */
export function DefaultLink({
  number,
  text,
  link,
  hoveredLinks,
  setHoveredLinks,
}: DefaultLinkProps) {
  const [inactiveLink, setInactiveLink] = useState(false)
  const linkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (hoveredLinks.length > 0 && !hoveredLinks.includes(text)) {
      setInactiveLink(true)
    } else {
      setInactiveLink(false)
    }
  }, [hoveredLinks, text])

  useLayoutEffect(() => {
    if (linkRef.current) {
      gsap.fromTo(
        linkRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, delay: number * 0.1 }
      )
    }
  }, [number])

  return (
    <a href={link} ref={linkRef}>
      <NavItem
        onMouseEnter={() => setHoveredLinks([text])}
        onMouseLeave={() => setHoveredLinks([])}
        $inactiveLink={inactiveLink}
      >
        <NavItemNumber>{number}.</NavItemNumber>
        <NavItemText>{text}</NavItemText>
      </NavItem>
    </a>
  )
}
