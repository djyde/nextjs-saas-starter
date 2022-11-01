import React from 'react'

function IndexPage(props: {
}) {
  return (
    <>
      Hello, index page
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