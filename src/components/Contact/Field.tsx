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
  error: string | undefined
}

type DropdownFieldProps = {
  register: UseFormRegister<ContactData>
  label: string
  value: string
  options: string[]
  error: string | undefined
}

// Styled components

const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: relative;
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

const FieldError = styled.h1`
  font-family: ${theme.spaceMono};
  font-size: ${theme.fontSize1};
  font-weight: 400;
  color: red;
  background-color: lightCoral;
  padding: 0.2rem 0.4rem;
  border-radius: 0.5rem;
  position: absolute;
  top: 0;
  right: 0;
`

/**
 * Renders a form field with a label and input.
 *
 * @param {TextFieldProps} props - The props for the form field.
 * @param {UseFormRegister<ContactData>} props.register - The register function from react-hook-form.
 * @param {string} props.label - The label for the field.
 * @param {string} props.value - The value for the field.
 * @param {string} props.placeholder - The placeholder for the field.
 * @param {string} props.error - The error for the field.
 *
 * @returns The rendered form field component.
 */
export function TextField({
  register,
  label,
  value,
  placeholder,
  error,
}: TextFieldProps) {
  return (
    <FieldContainer>
      <Label>{label}</Label>
      <TextInput
        type="text"
        placeholder={placeholder}
        {...register(value as keyof ContactData)}
      />
      {error && <FieldError>{error}</FieldError>}
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
 * @param {string} props.error - The error for the field.
 *
 * @returns The rendered form field component.
 */
export function DropdownField({
  register,
  label,
  value,
  options,
  error,
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
      {error && <FieldError>{error}</FieldError>}
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
 * @param {string} props.error - The error for the field.
 *
 * @returns The rendered large form field component.
 */
export function LargeTextField({
  register,
  label,
  value,
  placeholder,
  error,
}: TextFieldProps) {
  return (
    <FieldContainer>
      <Label>{label}</Label>
      <LargeTextInput
        placeholder={placeholder}
        {...register(value as keyof ContactData)}
      />
      {error && <FieldError>{error}</FieldError>}
    </FieldContainer>
  )
}
