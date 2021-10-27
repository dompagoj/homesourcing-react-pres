import { z } from 'zod'
import { AppForm, AppFormComponent, FormSubmitButton, FormTextField } from '../Form'
import { useZodForm } from '../hooks'

const schema = z
  .object({
    username: z.string().nonempty({ message: 'Required' }),
    password: z.string().nonempty(),
    confirmPassword: z.string().nonempty(),
  })
  .refine(form => form.password === form.confirmPassword, {
    message: 'Passwords do not match',
    path: ['password'],
  })

export type FormExampleType = z.infer<typeof schema>

export const FormExample: AppFormComponent<FormExampleType> = ({ onSubmit }) => {
  const form = useZodForm(schema)

  return (
    <AppForm form={form} onSubmit={onSubmit}>
      <FormTextField name="username" />
      <FormTextField name="password" type="password" />
      <FormTextField name="confirmPassword" type="password" />

      <FormSubmitButton />
    </AppForm>
  )
}
