import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import { Button } from '@chakra-ui/react'

function Index () {
  const [session, loading] = useSession()

  return <>
    {!session && <>
      Not signed in <br />
      <Button colorScheme="teal" onClick={signIn}>Sign in</Button>
    </>}
    {session && <>
      Signed in as {session.user.email} <br />
      <Button onClick={signOut}>Sign out</Button>
    </>}
  </>
}

export default Index