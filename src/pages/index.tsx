function Page() {
  return (
    <>
      hello world
    </>
  )
}

export async function getServerSideProps(ctx) {
  return {
    props: {

    }
  }
}

export default Page