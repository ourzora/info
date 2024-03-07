import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const client = new ApolloClient({
  link: new HttpLink({
    // uri: 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v2-dev',
    uri: 'https://api.goldsky.com/api/public/project_clhk16b61ay9t49vm6ntn4mkz/subgraphs/uniswap-v2-zora-network/1.0.0/gn'
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

// TODO

// export const healthClient = new ApolloClient({
//   link: new HttpLink({
//     uri: 'https://api.thegraph.com/index-node/graphql',
//   }),
//   cache: new InMemoryCache(),
//   shouldBatch: true,
// })

// export const v1Client = new ApolloClient({
//   link: new HttpLink({
//     uri: 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap',
//   }),
//   cache: new InMemoryCache(),
//   shouldBatch: true,
// })

// export const stakingClient = new ApolloClient({
//   link: new HttpLink({
//     uri: 'https://api.thegraph.com/subgraphs/name/way2rach/talisman',
//   }),
//   cache: new InMemoryCache(),
//   shouldBatch: true,
// })

// export const blockClient = new ApolloClient({
//   link: new HttpLink({
//     uri: 'https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks',
//   }),
//   cache: new InMemoryCache(),
// })
