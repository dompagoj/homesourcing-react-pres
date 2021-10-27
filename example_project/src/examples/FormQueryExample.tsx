import { useMutation } from 'react-query'
import { login } from '../http'
import { FormExample } from './FormExample'

export const FormQueryExample = () => {
  const { mutateAsync } = useMutation(login, {
    onSuccess: () => {}, // Route to another screen
  })

  return <FormExample onSubmit={mutateAsync} />
}
