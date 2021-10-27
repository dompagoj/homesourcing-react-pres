import { useEffect, useState } from 'react'
import { UserList } from '../Components'
import { addUser, getUsers } from '../http'

export const SimplestExmaple = () => {
  const [users, setUsers] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    getUsers()
      .then(users => {
        setUsers(users)
        setIsLoading(false)
      })
      .catch(err => {
        setError(err)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) return <>{/* Spinner */}</>
  if (error) return <>{/* Show error */}</>

  return <UserList users={users} />
}
