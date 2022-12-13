import { gql } from 'apollo-angular'

const REQUEST_FILE = gql`
  query {
    todos {
      id
      name
      description
    }
  }
`



export { REQUEST_FILE }