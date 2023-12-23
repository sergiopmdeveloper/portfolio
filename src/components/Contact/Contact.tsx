import { SectionTitle } from '../SectionTitle'
import { TextField, DropdownField, LargeTextField } from './Field'
import { EmailIllustration } from '../../icons/EmailIllustration'
import { Button } from '../../ui/Button'
import { useRef, useLayoutEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  ContactSchema,
  type ContactSchemaType,
  type ContactData,
} from '../../validation/contact'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import emailjs from '@emailjs/browser'
import styled from 'styled-components'
import { theme, AppSection } from '../../styles'

// Register scroll trigger plugin

gsap.registerPlugin(ScrollTrigger)

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

  @media (width <= ${theme.smallLaptop}) {
    width: 100%;
  }
`

const IllustrationBlock = styled.div`
  width: 50%;
  display: flex;
  justify-content: end;
  align-items: center;

  @media (width <= ${theme.smallLaptop}) {
    display: none;
  }
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

  @media (width <= ${theme.smallLaptop}) {
    font-size: ${theme.fontSize6};
  }

  @media (width <= ${theme.tablet}) {
    font-size: ${theme.fontSize5};
  }
`

const FormSuccessful = styled.span`
  font-family: ${theme.spaceMono};
  font-size: ${theme.fontSize1};
  font-weight: 400;
  color: green;
  background-color: lightGreen;
  padding: 0.2rem 0.4rem;
  border-radius: 0.5rem;
  position: absolute;
  top: -5%;
  right: 0;
`

const FormError = styled.span`
  font-family: ${theme.spaceMono};
  font-size: ${theme.fontSize1};
  font-weight: 400;
  color: red;
  background-color: lightCoral;
  padding: 0.2rem 0.4rem;
  border-radius: 0.5rem;
  position: absolute;
  top: -5%;
  right: 0;
`

/**
 * Renders the contact section.
 *
 * @returns The rendered contact section.
 */
export function Contact() {
  const [sending, setSending] = useState(false)
  const [successful, setSuccessful] = useState(false)
  const [error, setError] = useState(false)

  const sectionTitleRef = useRef(null)
  const contactRef = useRef(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactSchemaType>({
    resolver: zodResolver(ContactSchema),
  })

  useLayoutEffect(() => {
    if (sectionTitleRef && contactRef.current) {
      gsap.fromTo(
        sectionTitleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: sectionTitleRef.current,
        }
      )

      gsap.fromTo(
        contactRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: contactRef.current,
        }
      )
    }
  }, [])

  /**
   * Sends an email with the provided data.
   *
   * @param {ContactData} data - The data to be sent in the email.
   */
  const sendEmail: SubmitHandler<ContactSchemaType> = (data: ContactData) => {
    setSuccessful(false)
    setError(false)
    setSending(true)

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        data,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccessful(true)
          reset()
        },
        () => {
          setError(true)
        }
      )
      .finally(() => {
        setSending(false)
      })
  }

  return (
    <AppSection id="contact">
      <SectionTitle number={4} text="Contact" ref={sectionTitleRef} />
      <ContactContainer ref={contactRef}>
        <FormTitle>Get in touch</FormTitle>
        <ContactBlock>
          <FormBlock onSubmit={handleSubmit(sendEmail)}>
            <TextField
              register={register}
              label="Email"
              value="email"
              placeholder="Your email..."
              error={errors.email?.message}
            />
            <DropdownField
              register={register}
              label="Subject"
              value="subject"
              options={options}
              error={errors.subject?.message}
            />
            <LargeTextField
              register={register}
              label="Message"
              value="message"
              placeholder="Your message..."
              error={errors.message?.message}
            />
            <Button type="submit" disabled={sending} $loading={sending}>
              {sending ? 'Sending...' : 'Send'}
            </Button>
          </FormBlock>
          <IllustrationBlock>
            <StyledEmailIllustration />
          </IllustrationBlock>
        </ContactBlock>
        {successful && <FormSuccessful>Done!</FormSuccessful>}
        {error && <FormError>Error</FormError>}
      </ContactContainer>
    </AppSection>
  )
}
