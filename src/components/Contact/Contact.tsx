import { SectionTitle } from '../SectionTitle'
import { TextField, DropdownField, LargeTextField } from './Field'
import { EmailIllustration } from '../../icons/EmailIllustration'
import { Button } from '../../ui/Button'
import { useRef, useLayoutEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  ContactSchema,
  type ContactSchemaType,
  type ContactData,
} from '../../validation/contact'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
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

/**
 * Renders the contact section.
 *
 * @returns The rendered contact section.
 */
export function Contact() {
  const sectionTitleRef = useRef(null)
  const contactRef = useRef(null)

  const {
    register,
    handleSubmit,
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
    console.log(data)
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
