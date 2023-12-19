import { SectionTitle } from '../SectionTitle'
import { Field } from './Field'
import styled from 'styled-components'
import { theme, AppSection } from '../../styles'

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

const FormTitle = styled.h2`
  font-family: ${theme.roboto};
  font-size: ${theme.fontSize7};
  color: ${theme.white};
  margin-bottom: 3.5rem;
`

export function Contact() {
  return (
    <AppSection id="contact">
      <SectionTitle number={4} text="Contact" />
      <ContactContainer>
        <FormTitle>Get in touch</FormTitle>
        <ContactBlock>
          <Field label="Email" type="text" />
        </ContactBlock>
      </ContactContainer>
    </AppSection>
  )
}
