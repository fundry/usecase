import { gql } from 'apollo-boost';

const ALL_USECASES = gql`
  query Usecases {
    Usecases {
      id
      author
      title
      created
    }
  }
`;

const ALL_CASES = gql`
  query Cases {
    Cases {
      created
      id
      author
      name
    }
  }
`;

export { ALL_USECASES, ALL_CASES };
