import { SectionTitle } from '../SectionTitle'
import { TextField, DropdownField, LargeTextField } from './Field'
import { EmailIllustration } from '../../icons/EmailIllustration'
import { Button } from '../../ui/Button'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  ContactSchema,
  type ContactSchemaType,
  type ContactData,
} from '../../validation/contact'
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
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const FormBlock = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const IllustrationBlock = styled.div`
  width: 50%;
  display: flex;
  justify-content: end;
  align-items: center;
`

const StyledEmailIllustration = styled(EmailIllustration)`
  width: 55%;
  margin-right: 5rem;
`

const FormTitle = styled.h2`
  font-family: ${theme.roboto};
  font-size: ${theme.fontSize7};
  color: ${theme.white};
  margin-bottom: 2rem;
`

/**
 * Renders the contact section.
 *
 * @returns The rendered contact section.
 */
export function Contact() {
  const { register, handleSubmit } = useForm<ContactSchemaType>({
    resolver: zodResolver(ContactSchema),
  })

  /**
   * Sends an email with the provided data.
   *
   * @param {ContactData} data - The data to be sent in the email.
   */
  const sendEmail: SubmitHandler<ContactSchemaType> = (data: ContactData) => {
    console.log(data)
  }

  return (
    <AppSection id="contact">
      <SectionTitle number={4} text="Contact" />
      <ContactContainer>
        <FormTitle>Get in touch</FormTitle>
        <ContactBlock>
          <FormBlock onSubmit={handleSubmit(sendEmail)}>
            <TextField
              register={register}
              label="Email"
              value="email"
              placeholder="Your email..."
            />
            <DropdownField
              register={register}
              label="Subject"
              value="subject"
              options={options}
            />
            <LargeTextField
              register={register}
              label="Message"
              value="message"
              placeholder="Your message..."
            />
            <Button type="submit">Send</Button>
          </FormBlock>
          <IllustrationBlock>
            <StyledEmailIllustration />
          </IllustrationBlock>
        </ContactBlock>
      </ContactContainer>
    </AppSection>
  )
}
