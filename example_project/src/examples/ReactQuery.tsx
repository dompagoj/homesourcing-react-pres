import { useMutation, useQuery, useQueryClient } from 'react-query'
import { UserList } from '../Components'
import { getUsers, removeUser } from '../http'

export const SimpleExampleWithReactQuery = () => {
  const { data: users, isLoading, isError } = useQuery('users', getUsers)

  if (isLoading) return <>{/* Spinner */}</>
  if (isError) return <>{/* Show error */}</>

  return <UserList users={users!} />
}

export const SimpleExampleWithReactQueryMutation = () => {
  const queryClient = useQueryClient()
  const { data: users, isLoading, isError } = useQuery('users', getUsers)

  const {
    mutateAsync,
    isLoading: mutationLoading,
    isError: mutationError,
  } = useMutation(removeUser, {
    onSuccess: () => queryClient.invalidateQueries('users'),
  })

  if (isLoading) return <>{/* Spinner */}</>
  if (isError) return <>{/* Show error */}</>

  return <UserList users={users!} onDelete={mutateAsync} />
}
