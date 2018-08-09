import gql from 'graphql-tag';

export const updateTool = gql`
  mutation updateTool($input: tool) {
    updateTool(input: $input) {
        id,
        name,
        type,
        location
    }
  }
`;
