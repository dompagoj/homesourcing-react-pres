import { useQuery, useQueryClient } from 'react-query'
import { useParams } from 'react-router-dom'
import { UserProfile } from '../Components'
import { getUser } from '../http'

export const FetchOneExampleWithReactQuery = () => {
  const queryClient = useQueryClient()

  const { id } = useParams<any>()
  const { data: user, isLoading, isError } = useQuery(['users', id], () => getUser(id))

  if (isLoading) return <>{/* Spinner */}</>
  if (isError) return <>{/* Show error */}</>

  const invalidate = () => queryClient.invalidateQueries(['users', id])

  return <UserProfile user={user!} />
}
