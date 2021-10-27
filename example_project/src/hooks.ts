import { useEffect, useState } from 'react'
import { useForm, UseFormProps, UseFormReturn } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z, ZodSchema } from 'zod'

export function useGet<T>(func: () => Promise<T>) {
  const [data, setData] = useState<T>()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    func()
      .then(data => {
        setData(data)
        setIsLoading(false)
      })
      .catch(err => {
        setError(err)
        setIsLoading(false)
      })
  }, [])

  return { data: data as T, isLoading, error }
}

export function useZodForm<T extends ZodSchema<any, any>>(
  schema: T,
  formOpts?: UseFormProps
): UseFormReturn<z.infer<typeof schema>> {
  const form = useForm({
    resolver: zodResolver(schema),
    ...formOpts,
  })

  return form
}
