import React from 'react'
import { trpc } from '../utils.server'

function IndexPage(props: {
}) {
  const hello = trpc.hello.useQuery()
  return (
    <>
      Hello, {hello.data}
    </>
  )
}

export async function getServerSideProps(ctx) {
  return {
    props: {
    }
  }
}

export default IndexPage