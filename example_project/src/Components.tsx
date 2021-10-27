import React from 'react'

interface Props {
  users: string[]
  onClick?: (user: string) => any
  onDelete?: (user: string) => any
}

export const UserList: React.FC<Props> = ({ users, onClick, onDelete }) => {
  return (
    <>
      {users.map(u => (
        <div key={u} onClick={onClick ? () => onClick(u) : undefined}>
          {u}
          <div onClick={onDelete ? () => onDelete(u) : undefined}>Delete!</div>
        </div>
      ))}
    </>
  )
}

interface UserProfileProps {
  user: string
}

export const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return <>{user}</>
}
