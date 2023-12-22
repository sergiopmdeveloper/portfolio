import { UseFormRegister } from 'react-hook-form'
import { type ContactData } from '../../validation/contact'
import styled from 'styled-components'
import { theme } from '../../styles'

// Types

type TextFieldProps = {
  register: UseFormRegister<ContactData>
  label: string
  value: string
  placeholder: string
}

type DropdownFieldProps = {
  register: UseFormRegister<ContactData>
  label: string
  value: string
  options: string[]
}

// Styled components

const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`

const Label = styled.label`
  font-family: ${theme.roboto};
  font-size: ${theme.fontSize3};
  color: ${theme.lightSlate};
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
  height: 3rem;
  font-family: ${theme.spaceMono};
  font-size: ${theme.fontSize3};
  color: ${theme.navy};
  background-color: ${theme.lightestSlate};
  border-radius: 0.5rem;
  cursor: pointer;
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
 * @param {UseFormRegister<ContactData>} props.register - The register function from react-hook-form.
 * @param {string} props.label - The label for the field.
 * @param {string} props.value - The value for the field.
 * @param {string} props.placeholder - The placeholder for the field.
 *
 * @returns The rendered form field component.
 */
export function TextField({
  register,
  label,
  value,
  placeholder,
}: TextFieldProps) {
  return (
    <FieldContainer>
      <Label>{label}</Label>
      <TextInput
        type="text"
        placeholder={placeholder}
        {...register(value as keyof ContactData)}
      />
    </FieldContainer>
  )
}

/**
 * Renders a form field with a label and dropdown.
 *
 * @param {DropdownFieldProps} props - The props for the form field.
 * @param {UseFormRegister<ContactData>} props.register - The register function from react-hook-form.
 * @param {string} props.label - The label for the field.
 * @param {string} props.value - The value for the field.
 * @param {string[]} props.options - The options for the dropdown.
 *
 * @returns The rendered form field component.
 */
export function DropdownField({
  register,
  label,
  value,
  options,
}: DropdownFieldProps) {
  return (
    <FieldContainer>
      <Label>{label}</Label>
      <SelectInput defaultValue="" {...register(value as keyof ContactData)}>
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
 * @param {UseFormRegister<ContactData>} props.register - The register function from react-hook-form.
 * @param {string} props.label - The label for the field.
 * @param {string} props.value - The value for the field.
 * @param {string} props.placeholder - The placeholder for the field.
 *
 * @returns The rendered large form field component.
 */
export function LargeTextField({
  register,
  label,
  value,
  placeholder,
}: TextFieldProps) {
  return (
    <FieldContainer>
      <Label>{label}</Label>
      <LargeTextInput
        placeholder={placeholder}
        {...register(value as keyof ContactData)}
      />
    </FieldContainer>
  )
}
