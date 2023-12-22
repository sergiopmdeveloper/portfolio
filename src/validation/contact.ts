import * as Z from 'zod'

// Contact form validation schema

export const ContactSchema = Z.object({
  email: Z.string().email('Please enter a valid email address'),
  subject: Z.string().min(1, 'Required'),
  message: Z.string(),
})

// Types

export type ContactSchemaType = Z.infer<typeof ContactSchema>

export type ContactData = {
  email: string
  subject: string
  message: string
}
