import { trpc } from "../utils/trpc"

function Page() {

  const helloQuery = trpc.hello.useQuery({
    text: "world"
  })

  return (
    <>
      {helloQuery.data?.greeting}
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