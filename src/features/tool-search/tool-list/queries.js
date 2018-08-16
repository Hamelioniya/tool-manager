import gql from 'graphql-tag';

export const fetchTools = gql`
  query fetchTools {
    tools {
      id
      name
      type
      location
    }
  }
`;