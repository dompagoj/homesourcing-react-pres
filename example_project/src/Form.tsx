import React from 'react'
import { FormProvider, UnpackNestedValue, useFormContext, UseFormReturn, useFormState } from 'react-hook-form'

export interface AppFormProps<T = any> {
  onSubmit: (form: T) => any
  initialValues?: T
}
export type AppFormComponent<T = any> = React.FC<AppFormProps<T>>

interface CommonFormFieldAttributes {
  name: string
  label?: string
  defaultValue?: any
}

type FormField<T = unknown> = React.FC<CommonFormFieldAttributes & T>
type GenericFormField<T = any> = CommonFormFieldAttributes & T

interface Props<T = any> {
  children: any
  form: UseFormReturn<T>
  hasInitialValues?: boolean
  onSubmit?: (form: UnpackNestedValue<T>) => any
}

export const AppForm = <T,>({
  form,
  onSubmit,
  children,
  hasInitialValues = false,
  ...formProps
}: Props<T> &
  Omit<React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, 'onSubmit'>) => {
  return (
    <FormProvider {...form}>
      <form {...formProps} onSubmit={onSubmit && form.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  )
}

const useFormErrorState = (name: string) => {
  const { errors } = useFormState()

  return {
    hasError: !!errors[name],
    message: errors[name]?.message,
  }
}

const ErrorLabel: React.FC<{ name: string }> = ({ name }) => {
  const { hasError, message } = useFormErrorState(name)
  if (!hasError) return null

  return <div style={{ color: 'red' }}>{message}</div>
}

export const FormTextField: FormField<React.HTMLProps<HTMLInputElement>> = ({
  name,
  label,
  defaultValue,
  ...inputProps
}) => {
  const { register } = useFormContext()

  return (
    <div>
      <input {...register(name)} defaultValue={defaultValue} {...inputProps} />
      <ErrorLabel name={name} />
    </div>
  )
}

export const FormSubmitButton: React.FC = () => {
  const { isSubmitting } = useFormState()

  return (
    <div>
      <button type="submit">{isSubmitting ? 'Loading...' : 'Submit'}</button>
    </div>
  )
}
