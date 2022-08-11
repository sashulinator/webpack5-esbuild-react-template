import React, { FC } from 'react'

type UserProfileProps = {
  className?: string
}

const UserProfile: FC<UserProfileProps> = (): JSX.Element => {
  return (
    <>
      <main className="Main UserProfile">
        <ul style={{ padding: '32px 0 0 0' }}>
          <li>hello</li>
          <li>world</li>
        </ul>
      </main>
    </>
  )
}

export default UserProfile
