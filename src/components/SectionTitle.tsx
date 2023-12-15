import styled from 'styled-components'
import { theme } from '../styles'

// Types

type SectionTitleProps = {
  number: number
  text: string
}

// Styled components

const SectionTitleContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.2rem;
  margin-bottom: 2rem;
`

const Number = styled.span`
  font-family: ${theme.spaceMono};
  font-size: ${theme.fontSize7};
  color: ${theme.green};

  @media (width <= ${theme.tablet}) {
    font-size: ${theme.fontSize6};
  }
`

const Text = styled.h1`
  font-family: ${theme.roboto};
  font-size: ${theme.fontSize7};
  color: ${theme.white};

  @media (width <= ${theme.tablet}) {
    font-size: ${theme.fontSize6};
  }
`

/**
 * Renders a section title.
 *
 * @param {SectionTitleProps} props - The props of the component.
 * @param {number} props.number - The number of the section.
 * @param {string} props.text - The text of the section title.
 *
 * @returns  The rendered section title component.
 */
export function SectionTitle({ number, text }: SectionTitleProps) {
  return (
    <SectionTitleContainer>
      <Number>{number}.</Number>
      <Text>{text}</Text>
    </SectionTitleContainer>
  )
}
