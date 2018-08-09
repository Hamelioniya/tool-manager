import gql from 'graphql-tag';

export const addTool =  gql`
  mutation addTool($input: tool) {
    addTool(input: $input) {
        id,
        name,
        type,
        location
    }
  }
`;