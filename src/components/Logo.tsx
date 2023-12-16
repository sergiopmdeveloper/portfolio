import { forwardRef } from 'react'
import styled from 'styled-components'
import { theme } from '../styles'

// Types

type LogoProps = {
  onClick?: () => void
}

// Styled components

const LogoContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${theme.green};
  border-radius: 100%;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${theme.translucentGreen};
    transition: background-color 0.2s;
  }

  &:active {
    background-color: ${theme.translucentGreen};
    transition: background-color 0.2s;
  }
`

const LogoText = styled.span`
  font-size: ${theme.fontSize5};
  font-family: ${theme.spaceMono};
  color: ${theme.green};
`

/**
 * Renders the logo component.
 *
 * @param {LogoProps} props - The properties passed to the component.
 * @param {() => void} props.onClick - The click event handler for the logo.
 * @param {Ref<HTMLDivElement>} ref - The ref to be forwarded to the LogoContainer div.
 *
 * @returns The logo component.
 */
export const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ onClick }, ref) => {
    return (
      <LogoContainer onClick={onClick} ref={ref}>
        <LogoText>S</LogoText>
      </LogoContainer>
    )
  }
)
