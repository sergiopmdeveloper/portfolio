import styled from 'styled-components'
import { theme } from '../styles'

// Types

type ButtonWithIconProps = {
  text: string
  Icon: React.ComponentType
}

// Styled components

export const Button = styled.button`
  font-family: ${theme.spaceMono};
  font-size: ${theme.fontSize4};
  color: ${theme.lightestSlate};
  background-color: ${theme.lightestNavy};
  border-radius: 0.2rem;
  padding: 0.6rem 1.2rem;
  transition:
    background-color 0.2s,
    color 0.2s;

  &:hover {
    background-color: ${theme.darkenedLightestNavy};
    color: ${theme.green};
    transition:
      background-color 0.2s,
      color 0.2s;
  }

  &:active {
    background-color: ${theme.darkenedLightestNavy};
    color: ${theme.green};
    transition:
      background-color 0.2s,
      color 0.2s;
  }

  @media (width <= ${theme.tablet}) {
    font-size: ${theme.fontSize3};
  }

  @media (width <= ${theme.largeMobile}) {
    width: 100%;
    justify-content: center;
  }

  @media (width <= ${theme.smallMobile}) {
    font-size: ${theme.fontSize2};
  }
`

const ButtonWithIconWrapper = styled(Button)`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  & > * {
    width: 1.2rem;
    fill: ${theme.lightestSlate};
    transition: fill 0.2s;
  }

  &:hover > * {
    fill: ${theme.green};
    transition: fill 0.2s;
  }

  &:active > * {
    fill: ${theme.green};
    transition: fill 0.2s;
  }
`

/**
 * Renders a button with an icon.
 *
 * @param {ButtonWithIconProps} props - The component props.
 * @param {string} props.text - The text for the button.
 * @param {React.ComponentType} props.Icon - The icon component.
 *
 * @returns The rendered ButtonWithIcon component.
 */
export function ButtonWithIcon({ text, Icon }: ButtonWithIconProps) {
  const IconComponent = Icon

  return (
    <ButtonWithIconWrapper>
      {text}
      <IconComponent />
    </ButtonWithIconWrapper>
  )
}
