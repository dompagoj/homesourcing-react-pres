import { UserList } from '../Components'
import { useGet } from '../hooks'
import { getUsers, removeUser } from '../http'

export const SimpleExampleWithCustomHook = () => {
  const { data: users, error, isLoading } = useGet(getUsers)

  if (isLoading) return <>{/* Spinner */}</>
  if (error) return <>{/* Show error */}</>

  return <UserList users={users} />
}

export const SimpleExampleWithMutation = () => {
  const { data: users, error, isLoading } = useGet(getUsers)

  if (isLoading) return <>{/* Spinner */}</>
  if (error) return <>{/* Show error */}</>

  const onUserDelete = async (user: string) => {
    await removeUser(user)
    // Somehow refetch users
    // Show loading state
    // Show error state
  }

  return <UserList users={users} onDelete={onUserDelete} />
}
