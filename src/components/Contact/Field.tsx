import { useState } from 'react'
import styled from 'styled-components'
import { theme } from '../../styles'

// Types

type TextFieldProps = {
  label: string
  type: string
}

// Styled components

const FieldContainer = styled.div`
  width: 100%;
  position: relative;
`

const TextLabel = styled.label<{ $active: boolean }>`
  font-family: ${theme.spaceMono};
  font-size: ${theme.fontSize2};
  color: ${theme.slate};
  position: absolute;
  top: 18%;
  left: 1%;
  padding: 0 0.5rem;
  border-radius: 0.5rem;
  pointer-events: none;
  transition:
    top 0.2s,
    left 0.2s,
    color 0.2s,
    background-color 0.2s;

  ${({ $active }) =>
    $active &&
    `
        top: -80%;
        left: 0%;
        color: ${theme.lightNavy};
        background-color: ${theme.green};
        transition: top 0.2s, left 0.2s, color 0.2s, background-color 0.2s;
    `}
`

const TextInput = styled.input`
  width: 100%;
  height: 2.5rem;
  font-size: ${theme.fontSize3};
  color: ${theme.navy};
  background-color: ${theme.lightestSlate};
  border-radius: 0.5rem;
  box-sizing: border-box;
`

/**
 * Renders a form field with a label and input.
 *
 * @param {TextFieldProps} props - The props for the form field.
 * @param {string} props.label - The label for the field.
 * @param {string} props.type - The type of the input field.
 *
 * @returns The rendered form field component.
 */
export function Field({ label, type }: TextFieldProps) {
  const [active, setActive] = useState(false)
  const [value, setValue] = useState('')

  return (
    <FieldContainer>
      <TextLabel $active={active}>{label}</TextLabel>
      <TextInput
        type={type}
        value={value}
        onChange={e => setValue(e.target.value)}
        onFocus={() => setActive(true)}
        onBlur={() => (value === '' ? setActive(false) : setActive(true))}
      />
    </FieldContainer>
  )
}
