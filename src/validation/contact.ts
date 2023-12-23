import * as Z from 'zod'

// Contact form validation schema

export const ContactSchema = Z.object({
  email: Z.string().min(1, 'Required').email('Invalid email'),
  subject: Z.string().min(1, 'Required'),
  message: Z.string().min(1, 'Required'),
})

// Types

export type ContactSchemaType = Z.infer<typeof ContactSchema>

export type ContactData = {
  email: string
  subject: string
  message: string
}
