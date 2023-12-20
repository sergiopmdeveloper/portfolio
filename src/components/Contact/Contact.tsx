import { SectionTitle } from '../SectionTitle'
import { TextField, DropdownField, LargeTextField } from './Field'
import styled from 'styled-components'
import { theme, AppSection } from '../../styles'

// Content

const options = ['Open source', 'Job opportunity', 'Just saying hi']

// Styled components

const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  flex-direction: column;
  background-color: ${theme.lightNavy};
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-sizing: border-box;
`

const ContactBlock = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`

const FormBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const FormTitle = styled.h2`
  font-family: ${theme.roboto};
  font-size: ${theme.fontSize7};
  color: ${theme.white};
  margin-bottom: 2rem;
`

export function Contact() {
  return (
    <AppSection id="contact">
      <SectionTitle number={4} text="Contact" />
      <ContactContainer>
        <FormTitle>Get in touch</FormTitle>
        <ContactBlock>
          <FormBlock>
            <TextField label="Email" />
            <DropdownField options={options} />
            <LargeTextField label="Message" />
          </FormBlock>
        </ContactBlock>
      </ContactContainer>
    </AppSection>
  )
}
