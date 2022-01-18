import { GraphQLClient, gql } from 'graphql-request'

const { GRAPHCMS_ENDPOINT, GRAPHCMS_TOKEN } = process.env
export const getStaticProps = async () => {
  const graphQLClient = new GraphQLClient(GRAPHCMS_ENDPOINT, {
    headers: { authorization: `Bearer ${GRAPHCMS_TOKEN}` },
  })

  const query = gql`
    query {
      videos {
        id
        title
        description
        mp4 {
          url
        }
        slug
        seen
        thumbnail {
          url
        }
        tags
      }
    }
  `

  const data = await graphQLClient.request(query)

  const videos = data.videos

  return { props: { videos } }
}
const Home = ({ videos }) => {
  console.log(videos)
  return <div>Hello {}</div>
}

export default Home
