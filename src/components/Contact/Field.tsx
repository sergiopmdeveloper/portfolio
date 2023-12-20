import { useState } from 'react'
import styled from 'styled-components'
import { theme } from '../../styles'

// Types

type TextFieldProps = {
  label: string
}

type DropdownFieldProps = {
  options: string[]
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
  top: 25%;
  left: 1%;
  padding: 0 0.5rem;
  border-radius: 0.3rem;
  pointer-events: none;
  transition:
    font-size 0.2s,
    top 0.2s,
    left 0.2s,
    color 0.2s,
    background-color 0.2s;

  ${({ $active }) =>
    $active &&
    `
        font-size: ${theme.fontSize1};
        color: ${theme.lightNavy};
        background-color: ${theme.green};
        top: -20%;
        transition: font-size 0.2s, top 0.2s, left 0.2s, color 0.2s, background-color 0.2s;
    `}
`

const TextInput = styled.input`
  width: 100%;
  height: 3rem;
  font-family: ${theme.spaceMono};
  font-size: ${theme.fontSize3};
  color: ${theme.navy};
  background-color: ${theme.lightestSlate};
  border-radius: 0.5rem;
`

const SelectInput = styled.select`
  width: 100%;
  height: 2.5rem;
  font-family: ${theme.spaceMono};
  font-size: ${theme.fontSize3};
  color: ${theme.navy};
  background-color: ${theme.lightestSlate};
  border-radius: 0.5rem;
  cursor: pointer;
`

const LargeTextLabel = styled.label<{ $active: boolean }>`
  font-family: ${theme.spaceMono};
  font-size: ${theme.fontSize2};
  color: ${theme.slate};
  position: absolute;
  top: 5%;
  left: 1%;
  padding: 0 0.5rem;
  border-radius: 0.3rem;
  pointer-events: none;
  transition:
    font-size 0.2s,
    top 0.2s,
    left 0.2s,
    color 0.2s,
    background-color 0.2s;

  ${({ $active }) =>
    $active &&
    `
        font-size: ${theme.fontSize1};
        top: -6%;
        color: ${theme.lightNavy};
        background-color: ${theme.green};
        transition: font-size 0.2s, top 0.2s, left 0.2s, color 0.2s, background-color 0.2s;
    `}
`

const LargeTextInput = styled.textarea`
  width: 100%;
  height: 10rem;
  font-family: ${theme.spaceMono};
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
 *
 * @returns The rendered form field component.
 */
export function TextField({ label }: TextFieldProps) {
  const [active, setActive] = useState(false)
  const [value, setValue] = useState('')

  return (
    <FieldContainer>
      <TextLabel $active={active}>{label}</TextLabel>
      <TextInput
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        onFocus={() => setActive(true)}
        onBlur={() => (value === '' ? setActive(false) : setActive(true))}
      />
    </FieldContainer>
  )
}

/**
 * Renders a form field with a label and dropdown.
 *
 * @param {DropdownFieldProps} props - The props for the form field.
 * @param {string[]} props.options - The options for the dropdown.
 *
 * @returns The rendered form field component.
 */
export function DropdownField({ options }: DropdownFieldProps) {
  return (
    <FieldContainer>
      <SelectInput defaultValue="">
        <option value="" disabled hidden>
          Select an option
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </SelectInput>
    </FieldContainer>
  )
}

/**
 * Renders a large form field with a label and textarea.
 *
 * @param {TextFieldProps} props - The props for the form field.
 * @param {string} props.label - The label for the field.
 *
 * @returns The rendered large form field component.
 */
export function LargeTextField({ label }: TextFieldProps) {
  const [active, setActive] = useState(false)
  const [value, setValue] = useState('')

  return (
    <FieldContainer>
      <LargeTextLabel $active={active}>{label}</LargeTextLabel>
      <LargeTextInput
        value={value}
        onChange={e => setValue(e.target.value)}
        onFocus={() => setActive(true)}
        onBlur={() => (value === '' ? setActive(false) : setActive(true))}
      />
    </FieldContainer>
  )
}
